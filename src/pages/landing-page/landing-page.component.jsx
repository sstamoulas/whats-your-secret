import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { submitSecretStart } from './../../redux/secret/secret.actions';
import { generateRandomColor } from './../../redux/color/color.actions';
import * as ROUTES from './../../constants/routes';

import './landing-page.styles.scss';

const LandingPage = ({ history, submitSecretStart, generateRandomColor }) => {
  let [secret, setSecret] = useState('');

  useEffect(() => {
    const btn = document.querySelector('.submit-secret-link');
    const ripple = document.createElement("span"); 

    const addRipple = () => {

      // Add ripple class to span 
      ripple.classList.add("ripple"); 

      // Add span to the button  
      btn.appendChild(ripple); 

      // Get position of X 
      let x = (btn.offsetWidth)/2; 

      // Get position of Y  
      let y = (btn.offsetHeight)/2; 

      // Position the span element 
      ripple.style.left = `${x}px`; 
      ripple.style.top = `${y}px`; 
    }

    addRipple();
  }, [])

  const handleChange = (event) => {
    const { value } = event.target;
    setSecret(value);
  }

  const handleSubmit = (event) => {
    if(secret) {
      submitSecretStart(secret);
      generateRandomColor();
      history.push(ROUTES.SECRET);
    }
    event.preventDefault();
  }

  return (
    <Fragment>
      <h2 className='page-title'>Please Submit Your Secret</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='secret' value={secret} onChange={handleChange} />
        <button type="submit" className='submit-secret-link'>Submit Secret</button>
      </form>
    </Fragment>
  )
};

const mapDispatchToProps = (dispatch) => ({
  submitSecretStart: (secret) => dispatch(submitSecretStart(secret)),
  generateRandomColor: () => dispatch(generateRandomColor()),
})

export default connect(null, mapDispatchToProps)(withRouter(LandingPage));
