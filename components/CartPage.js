// CartPage backup

import React, { useState } from 'react';
import './classes/CartPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const initialCart = [
  {
    product: 'Athlete Marketing and Branding - Tuition Paid in Three Payments',
    paymentPlan: 'Three Payments',
    price: 550.00,
  },
  {
    product: 'Baseball Marketing and Branding - Tuition Paid in Three Payments',
    paymentPlan: 'Two Payments',
    price: 550.00,
  },
];

const paymentOptions = ['Single Payment', 'Two Payments', 'Three Payments'];

function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [message, setMessage] = useState('');

  const handleRemove = (index) => {
    if (window.confirm('Do you want to remove this from your cart?')) {
      const newCart = [...cart];
      const removedItem = newCart.splice(index, 1);
      setCart(newCart);
      setMessage(`Removed ${removedItem[0].product} From Cart`);
    }
  };

  const handlePaymentPlanChange = (index, newPaymentPlan) => {
    const newCart = [...cart];
    newCart[index].paymentPlan = newPaymentPlan;
    setCart(newCart);
  };

  return (
    <div className="cart-page">
      <Helmet><title>SMWW Cart</title></Helmet>
      <div className="cart-details">
        {message && (
          <div className="set-message-done">
            <span className="cart-message-icon message-icon"><i className="fa fa-check-circle"></i></span> {message}
          </div>
        )}
        {cart.length > 0 ? (
          <>
            <h2 className='your-cart-text'>Your Cart</h2>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item.product}
                      <div className='cart-page-payment-text'>
                        Payment Plan: 
                        <select
                          className='select-payment'
                          value={item.paymentPlan}
                          onChange={(e) => handlePaymentPlanChange(index, e.target.value)}
                        >
                          {paymentOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button className="remove-button" onClick={() => handleRemove(index)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="checkout-button1">Checkout</button>
            <div className="cart-note">
              *All prices on this page are in USD.
              <br />
              **Alumni, economic, and military discounts will be applied during the last step of checkout.
            </div>
          </>
        ) : (
          <div className="empty-cart-message">
            <h2 className='cart-is-empty'>Your Cart is Empty.</h2>
            <p>To continue with your purchase, you can select one of the following options:</p>
            <div className="empty-cart-buttons">
              <Link to="/smww_pay">
                <button className="redirect-button">Go to Courses</button>
              </Link>
              <Link to="/conferences">
                <button className="redirect-button">Go to Conferences</button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="order-summary">
          <h2 className='your-order-text'>YOUR ORDER</h2>
          <div className="order-details">
            <div className="order-item">
              <span className='product-items'>Product Items ({cart.length})</span>
              <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
            </div>
            <div className="order-total">
              <span>TOTAL</span>
              <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
            </div>
            <button className="checkout-button2">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
