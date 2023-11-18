import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
const [messageSent, setMessageSent] = useState(false);
const emailRegex=new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
const errormessageName='Please enter at least 2 characters';
const errormessageEmail='Please enter a valid email address';
const errormessageTextarea='Please enter at least 8 characters';

const contForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

  validationSchema: Yup.object( {
    name: Yup.string().required(errormessageName).min(2, errormessageName),
    email: Yup.string().required(errormessageEmail).matches(emailRegex, errormessageEmail),
    message: Yup.string().required(errormessageTextarea).min(8, errormessageTextarea)
  }),

  onSubmit: async (messageObject) => {
    const res = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', 
    {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(messageObject)
    });
    if (res.status===200) {
      contForm.resetForm();
      setMessageSent(true);
    } else {
      alert('Something went wrong, please try again!')
    }
  }
});

  return (
    <section className="contact-form">
        <div className="container-md contact-form-wrp">
            
          {messageSent ?
            <div className="send-confirmation">
              <h2>Thank you for reaching out to us!</h2>
              <h3> We will get back to you as soon as possible</h3>
              <button className="btn-generic btn-yellow" onClick={() => setMessageSent(false)}>OK</button>
            </div>
          :
            <>
              <h2>Leave us a message<br/>for any information</h2>
              <form noValidate onSubmit={contForm.handleSubmit}>
                  <div className="input-field">
                    {(contForm.touched.name && contForm.errors.name)?<div className="error">{contForm.errors.name}</div>:''}
                    <input type="text" name="name" value={contForm.values.name} onChange={contForm.handleChange} tabIndex="1" placeholder="Name*" />
                  </div>
                  <div className="input-field">
                    {(contForm.touched.email && contForm.errors.email)?<div className="error">{contForm.errors.email}</div>:''}
                    <input type="email" name="email" value={contForm.values.email} onChange={contForm.handleChange} tabIndex="2" placeholder="Email*" />
                  </div>
                  <div className="input-field">
                    {(contForm.touched.message && contForm.errors.message)?<div className="error">{contForm.errors.message}</div>:''}
                    <textarea name="message" value={contForm.values.message} onChange={contForm.handleChange} tabIndex="3" placeholder="Your Message*"></textarea>
                  </div>
                  <button type="submit" className="btn-generic btn-yellow">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
              </form>
            </>
          }


        </div>
    </section>
  );
}

export default ContactForm;