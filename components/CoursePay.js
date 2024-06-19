//backup of CoursePay.js


import React, { useState } from 'react';
import './classes/CoursePay.css';
import courses from './lib/courses';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function CoursePay() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [addedCourse, setAddedCourse] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

  const handlePaymentChange = (courseName, paymentOption) => {
    setSelectedOptions({
      ...selectedOptions,
      [courseName]: paymentOption,
    });
  };

  const handleAddToCart = (course) => {
    const selectedOption = selectedOptions[course.name];
    setCartItems([...cartItems, course]);
    setAddedCourse(course.name);
    setSelectedPaymentOption(selectedOption);
    setShowSuccessMessage(true);
  };

  return (
    <div className={`course-selection ${showSuccessMessage ? 'dim-background' : ''}`}>
      <Helmet>
        <title>Pay for a Course</title>
      </Helmet>
      <img className='two-courses' src={`${process.env.PUBLIC_URL}/images/pay02.png`} alt="smww-pay" />

      <div className="toolbar-pf">
        <p className='please-note'>Please Note:</p>
        <div className="column1">
          <ul>
            <li>Required books are included in course fees.</li>
            <li>Length: 8 Weeks; Includes live weekly audio chats with renowned instructors</li>
          </ul>
        </div>
        <div className="column2">
          <ul>
            <li>Shipping is additional.</li>
            <li>Payment Plans and PayPal financing available.</li>
          </ul>
        </div>
        <div className="column3">
          <ul>
            <li>Discounts available for <a target="_blank" href="https://www.sportsmanagementworldwide.com/military-discount">Military</a>, SMWW Alumni and <a target="_blank" href="https://www.sportsmanagementworldwide.com/economic-discounts">Economically Challenged Countries</a></li>
            <li>Your information will not be sold or shared. For details see our <a target="_blank" href="https://www.sportsmanagementworldwide.com/privacy">Privacy Statement</a>.</li>
          </ul>
        </div>
        <div className="column4">
          <ul className="img-ig">
            <li className="imgssl">
              <img className="ig-1 lazyloaded" style={{ width: 96 }} data-src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/rapid.png" src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/rapid.png" />
            </li>
            <li className="imgssl" style={{ listStyleType: "none" }}>
              <img className="bblogo ig-2 lazyloaded" width={96} height={36} data-src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/accredited-business.png" src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/accredited-business.png" />
            </li>
          </ul>
        </div>
        <div className="mobile_secure_image">
          <img className="ig-1 lazyloaded" style={{ width: 96 }} data-src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/rapid.png" src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/rapid.png" />
          <img className="bblogo ig-2 lazyloaded" style={{ marginLeft: "6%" }} width={96} height={36} data-src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/accredited-business.png" src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/sites/all/themes/smww_commerce/pay/img/accredited-business.png" />
        </div>
      </div>

      <div className="toolbar-pf-results des">
        <h5>Select Your Course, Pick a Start Date and Unlock Your Potential!</h5>
        <select className="browser-default custom-select" name="country" id="country" onChange={() => {}}>
          <option value="">Select Your Country</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
          <option value="AD">Andorra</option>
        </select>
        <button type="button" className="view-cart-button-smw">View Cart</button>
      </div>

      {showSuccessMessage && (
        <div className="success-message">
          <p>Added Successfully</p>
          <div className="message-content">
            <div className="message-icon">
              <i className="fa fa-check-circle"></i>
            </div>
            <div className="message-text">
              <p>{addedCourse} - {selectedPaymentOption} was added successfully to the cart.</p>
            </div>
          </div>
          <div className="success-buttons">
          <Link to="/smww/cart">
            <button className="view-cart-button">View Cart</button>
          </Link> 
          <Link to="">
            <button className="checkout-button">Checkout</button>
          </Link>   
            <button className="close-button" onClick={() => setShowSuccessMessage(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3 className='smww-pay-heading'>{course.name}</h3>
            {course.paymentOptions.map((option, optIndex) => (
              <div key={optIndex} className="payment-option">
                <input
                  type="radio"
                  id={`option-${index}-${optIndex}`}
                  name={`payment-${course.name}`}
                  value={option.label}
                  checked={selectedOptions[course.name] === option.label}
                  onChange={() => handlePaymentChange(course.name, option.label)}
                />
                <label className='sta-spay-label' htmlFor={`option-${index}-${optIndex}`}>
                  {option.label} <span className="price">{option.price}</span>
                </label>
              </div>
            ))}
            <button className="smww-pay-button" onClick={() => handleAddToCart(course)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePay;
