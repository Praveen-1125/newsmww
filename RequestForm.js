//RequestForm.js backup

import React, { useState } from 'react';
import './RequestForm.css';
import { Helmet } from 'react-helmet';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailAgain: '',
    phoneNumber: '',
    locationComment: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.emailAgain) tempErrors.emailAgain = 'Email confirmation is required';
    if (formData.email !== formData.emailAgain) tempErrors.emailAgain = 'Emails do not match';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.locationComment) tempErrors.locationComment = 'Location and Comment are required';

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      
    }
  };

  return (

    <div className='request-form-container'>
    <form onSubmit={handleSubmit} className='request-info info-form'>
        <Helmet><title>Request More Information</title></Helmet>
        <div className='req-paragraph'>
            <p>Your information will not be sold or shared.  For details see our <a target="_blank" href="https://www.sportsmanagementworldwide.com/privacy">Privacy Statement</a>.</p>
            <p>Fields marked with an asterisk <span className="form-required" title="This field is required.">*</span> are required.</p>
        </div>
        <hr />
      <div className='info-fields'>
        <label>First Name <span className="form-required" title="This field is required.">*</span></label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div className='info-fields'>
        <label>Last Name <span className="form-required" title="This field is required.">*</span></label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div className='info-fields'>
        <label>Email <span className="form-required" title="This field is required.">*</span></label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className='info-fields'>
        <label>Email, again <span className="form-required" title="This field is required.">*</span></label>
        <input type="email" name="emailAgain" value={formData.emailAgain} onChange={handleChange} />
        <div class="description">Please confirm your email address by entering it again.</div>
        {errors.emailAgain && <span>{errors.emailAgain}</span>}
      </div>
      <div className='info-fields'>
        <label>Phone Number <span className="form-required" title="This field is required.">*</span></label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <div className='info-fields'>
        <label>Your location and Question or Comment <span className="form-required" title="This field is required.">*</span></label>
        <textarea name="locationComment" value={formData.locationComment} onChange={handleChange}></textarea>
        {errors.locationComment && <span>{errors.locationComment}</span>}
      </div>
      <button type="submit" className='info-submit'>Submit</button>
    </form>
    </div> 
  );
};

export default RequestForm;
