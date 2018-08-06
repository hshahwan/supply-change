import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import family from './Imgs/family.png';
import Group1 from './Imgs/Group1.png';
import Fontawesome from 'react-fontawesome';

export default props => {
  const { handleChange, isCompany } = props;
  return (
    <div className='signup__main'>
      <div className='signup__topForm'>
        <h3 className='header1'>
             Sign Up
        </h3>
        <div className='select-user'>

          <button className='signup__button button0'>
              Buyer
          </button>
          <button className='signup__button button0'>
             Supplier
          </button>
        </div>
      </div>

      <div className='align'>

        <div className='grid'>

          <form action='' method='POST' className='form Signup'>

            <div className='form__field'>
              <input id='CompanyHouseNumber' type='number' min='0' name='CompanyHouseNumber' onChange={handleChange} className='form__input' placeholder='Company House Number' required />
              <label htmlFor='CompanyHouseNumber'>
                <Fontawesome className='fontawesome' name='sort-numeric-up' />
                <span className='hidden' />
              </label>
            </div>

            {!props.visible?
              <div className='form__field'>
                <input type='submit' className='submitButton' value='check' onClick={props.isCompany} />
              </div>
              :null
            }
            {props.error?<div className='error-msg'>Company Not Found</div>:null}

            {props.visible?(
              <div>
                <div className='form__field'>
                  <input id='businessName' type='text' name='businessName' value={props.companyInfo.company_name} className='form__input' placeholder='Business Name' required />
                  <label htmlFor='businessName'>
                    <Fontawesome className='fontawesome' name='briefcase' />
                    <span className='hidden' />
                  </label>
                </div>

                <div className='form__field'>
                  <input id='firstName' type='text' name='firstName' onChange={handleChange} className='form__input' placeholder='First Name' required />
                  <label htmlFor='firstName'>
                    <Fontawesome className='fontawesome' name='user' />
                    <span className='hidden' />
                  </label>
                </div>

                <div className='form__field'>
                  <input id='lastName' type='text' name='lastName' onChange={handleChange} className='form__input' placeholder='Last Name' required />
                  <label htmlFor='lastName'>
                    <Fontawesome className='fontawesome' name='users' />

                    <span className='hidden' />
                  </label>
                </div>

                <div className='form__field'>
                  <input id='email' type='email' name='eamil' onChange={handleChange} className='form__input' placeholder='Email' required='required' />
                  <label htmlFor='email'>
                    <Fontawesome className='fontawesome' name='envelope' />
                    <span className='hidden' />
                  </label>
                </div>

                <div className='form__field'>
                  <input id='password' type='password' name='password' onChange={handleChange} className='form__input' placeholder='Password' required />
                  <label htmlFor='password'>
                    <Fontawesome className='fontawesome' name='lock' />
                    <span className='hidden' />
                  </label>
                </div>

                <div className='form__field'>
                  <input id='confirm' type='password' name='confirm' onChange={handleChange} className='form__input' placeholder='Confirm Password' required />
                  <label htmlFor='confirm'>
                    <Fontawesome className='fontawesome' name='undo-alt' />

                    <span className='hidden' />
                  </label>
                </div>

                <div className='form__field'>
                  <input id='phone' type='number' name='phone' min='0' onChange={handleChange} className='form__input' placeholder='Phone Number' required />
                  <label htmlFor='phone'>
                    <Fontawesome className='fontawesome' name='phone' />
                    <span className='hidden' />
                  </label>
                </div>

                <div className='spaceDiv--imgDiv'>
                  <div className='spaceDiv' />
                  <img src={Group1} alt='' className='spaceImg' />
                </div>

                <div className='checkBox'>
                  <input id='mailingList' type='checkbox' onChange = {handleChange} name='mailingList' value='mailingList' />
                  <span className='checkBoxSpan'>
                  Join Mailing List
                  </span>
                  <input id='T&C' type='checkbox' onChange = {handleChange} name='T&C' value='T&C' />
                  <span className='checkBoxSpan'>
                  T&C
                  </span>
                </div>

                <div className='form__field'>
                  <input type='submit' className='submitButton'value='Sign Up' onClick={props.submitForm} />
                </div>
              </div>
            ):null}
          </form>

          <div className='SubmitDiv'>
            <p className='text--center'>
                Already have an account?
            </p>
            <a href='#'>
              <p className='text--login'>
                   Login Now
              </p>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
