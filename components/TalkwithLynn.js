import React, { useState } from 'react';
import './TalkwithLynn.css';

const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailAgain: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    comments: '',
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
    if (!formData.country) tempErrors.country = 'Country is required';
    if (!formData.state) tempErrors.state = 'State / Province is required';
    if (!formData.comments) tempErrors.comments = 'Comments or Questions are required';

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
    <div className="talk-form-container">
        <div>
        <h1>Talk With Dr. Lynn Lashbrook</h1>
        <div className="paragraph-image-container">

        <div className='opening-paragraph'>   
        <p>
        With over 50 years of experience in the sports industry, in roles ranging from NFL 
        agent to NCAA Athletic Director, Dr. Lynn Lashbrook has seen it all, and he’s willing
         to share his career advice and knowledge one-on-one with you!</p>
        
        
        <ul>
            <li>Looking for a sports business edge?</li>
            <li>Seeking to re-career?</li>
            <li>Dream of being a sports agent?</li>
            <li>Considering your Masters?  Doctorate?</li>
            <li>Want to work in college athletics or the pros but don't know where to start?</li>
            <li>Currently work in sports and want to move up?</li>
        </ul>
        
        <p>Dr. Lashbrook is ready and willing to be your trusted advisor <span className='guidance'>whatever guidance you need in sports!</span>
        When Mike Matheny was fired as manager of the St. Louis Cardinals he spoke to Dr. Lashbrook, they 
        developed a plan together and one year later he was managing the Kansas City Royals.</p>

        <p>Dr. Lashbrook can help you too!</p> 

        <p>Fill out the form below and <u>he will call you directly</u> to discuss privately and confidentially your sports career questions.</p>
        </div> 
         <div> 
        <img src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/images/clients/lynn_pic.png" 
        alt="Description" className="paragraph-image" />
        </div>      

      </div>

      <div className="form-image-container">
        <form onSubmit={handleSubmit} className='talk-form-left'>
          <div className='talk-form-heading'>
            <p><strong>SPORTS JOBS START WITH SMWW</strong> <br />
                <em>(Please state your specific interest, question, or goal)</em>
            </p>
            </div>  

          <div className='talk-fields'>
            <label>First Name <span className="form-required" title="This field is required.">*</span></label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div className='talk-fields'>
            <label>Last Name <span className="form-required" title="This field is required.">*</span></label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div className='talk-fields'>
            <label>Email <span className="form-required" title="This field is required.">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className='talk-fields'>
            <label>Email, again <span className="form-required" title="This field is required.">*</span></label>
            <input type="email" name="emailAgain" value={formData.emailAgain} onChange={handleChange} />
            {errors.emailAgain && <span>{errors.emailAgain}</span>}
          </div>
          <div className='talk-fields'>
            <label>Phone Number <span className="form-required" title="This field is required.">*</span></label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </div>
          <div className='talk-fields'>
            <label>Country <span className="form-required" title="This field is required.">*</span></label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && <span>{errors.country}</span>}
          </div>
          <div className='talk-fields'>
            <label>State / Province <span className="form-required" title="This field is required.">*</span></label>
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State / Province</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Ontario">Ontario</option>
            </select>
            {errors.state && <span>{errors.state}</span>}
          </div>
          <div className='talk-fields'>
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </div>
          <div className='talk-fields'>
            <label>Comments or Questions <span className="form-required" title="This field is required.">*</span></label>
            <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
            {errors.comments && <span>{errors.comments}</span>}
          </div>
          <button className='talk-with-lynn-btnn' type="submit">LET'S CHAT</button>
        </form>
        <div className='form-right-image'>
        <img src="https://aisiiczsuo.cloudimg.io/v7/https://www.sportsmanagementworldwide.com/images/clients/talk_with_dr_lashbrook.png" alt="Description" className="form-bigimage-right" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdvancedForm;
