import React, { useState } from 'react';
import './classes/PaymentPage.css';
import { Helmet } from 'react-helmet';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('CreditCard');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="payment-container">
      <Helmet><title>SMWW Card Payment</title></Helmet>
      <div className="main-content">
        <div className="payment-info">
          <h2>SHIPPING INFORMATION</h2>
          <div className="payment-shipping-info">
            <div className="shipping-address">
              <p>SHIPPING ADDRESS</p>
              <p>test</p>
              <p>Tamil Nadu, 628008</p>
              <p>India</p>
            </div>
            <div className="shipping-method">
              <p>SHIPPING METHOD:</p>
              <p>UPS Worldwide Expedited</p>
            </div>
          </div>
        </div>

        <div className="payment-section">
          <h2>PAYMENT</h2>
          <form>
            <div className="billing-address">
              <input type="checkbox" name="sameAsShipping" defaultChecked />
              <label className='pamt-billing'>My billing address is the same as my shipping address</label>
            </div>
            <div className="payment-method">
              <div className="payment-method-item">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  checked={paymentMethod === 'PayPal'}
                  onChange={handlePaymentMethodChange}
                />
                <label className='pmt-type-labels'>
                  PayPal
                  <img src="http://newsmww.preferati.net/sites/all/themes/smww_commerce/pay/img/paypal_logo.png" alt="PayPal" className="paypal-logo" />
                </label>
              </div>
              <div className="payment-method-item">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="CreditCard"
                  checked={paymentMethod === 'CreditCard'}
                  onChange={handlePaymentMethodChange}
                />
                
                <label className='pmt-type-labels'>
                  Credit or Debit Card
                  <img src="http://newsmww.preferati.net/sites/all/themes/smww_commerce/pay/img/card_img.png" alt="Credit Cards" className="credit-card-logos" />
                </label>
              </div>
            </div>

            {paymentMethod === 'CreditCard' && (
              <>
                <input type="text" className='payment-page-textbox' name="cardName" placeholder="Name On The Card" required />
                <div className='credit-card-input'>
                <input type="text" className='payment-page-textbox' name="cardNumber" placeholder="Card Number" required />
                <span className='cc-card'><i class="fa-regular fa-credit-card"></i></span>
                </div>
                <div className="card-expiry-cvc">
                  <input type="text" className='payment-page-textbox' name="cardExpiry" placeholder="MM / YY" required />
                  <input type="text" className='payment-page-textbox' name="cardCvc" placeholder="CVC" required />
                </div>
              </>
            )}

            <div className="recaptcha">
              <div className="recaptcha-logo"></div>
              <label>I'm not a robot</label>
            </div>
            <button type="submit" className="pay-now-button">
              {paymentMethod === 'PayPal' ? 'Proceed to PayPal' : 'Pay Now'}
            </button>
          </form>
        </div>
      </div>

      <div className="checkout-page-order-summary left-space">
          <h2>YOUR ORDER</h2>
          <div className="ch-order-details">
            <div>
              <div className="order-items">
                <span>Product Items (1)</span>
                <span>$550.00</span>
              </div>
              <hr className='payment-hr' />
              <div className="order-shipping">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className='payment-hr' />
              <div className="ch-order-total">
                <span className='ch-total'>TOTAL</span>
                <span className='ch-total-amount'>$550.00</span>
              </div>
              <button type="button" className="pay-now-oder-button">{paymentMethod === 'PayPal' ? 'Proceed to PayPal' : 'Pay Now'}</button>
            </div>
            <div className='coupon-container-dotted'>
              <div className="coupon-container">
                <input type="text" name="coupon" placeholder="Coupon" />
                <button className="ch-apply-coupon">Apply</button>
              </div>
            </div>
            <div>
              <h3 className='prod-pay'>PRODUCT DETAILS</h3>
              <div className="product-details">
                <p>Athlete Marketing and Branding - Tuition Paid in Three Payments</p>
                <p>$550.00</p>
              </div>
              <hr className='payment-hr' />
            </div>
            <div className="pay-order-note">
              <p>*Discounts are applied during checkout.</p>
              <hr className='payment-hr' />
              <p>**All prices are in USD.</p>
              <hr className='payment-hr' />
              <p className='pay-last'>***Entering your contact information during checkout will put you on SMWW's newsletter and SMS 
                list which you can unsubscribe from at any time. <a href='https://www.sportsmanagementworldwide.com/privacy'>Click</a> here to view our Privacy Policy.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PaymentPage;
