import React, { useState, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { useFormspark } from "@formspark/use-formspark";
import ReCAPTCHA from "react-google-recaptcha";
import { CONTACT_FORM_ID } from '../config';


const FORMSPARK_FORM_ID = "bA4bnUPj";
const RECAPTCHA_SITE_KEY = "6LeZ1pYhAAAAAEn6uWkDqIV_jqUQFXmTbfbdMq4A";

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitResponse, setSubmitResponse] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);
  

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    } else {
      setRecaptchaToken(captchaCode);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, message, "g-recaptcha-response": recaptchaToken });
    // alert("Form Submitted");
    setSubmitResponse(true);
    setTimeout(() => {
      setSubmitResponse(false);
    }, 5000)
    
  }

  return (
    <div>
      <form onSubmit={onSubmit} id="contact-form" className="contact-form bg-indigo-600 px-4 py-8 lg:px-12 rounded-xl grid xl:grid-cols-12 xl:gap-4">
        <h1 className='mb-8 text-offwhite text-5xl font-semibold xl:col-span-12'>
          Contact
        </h1>
        {submitResponse && <div className="xl:col-span-12 bg-turquoise px-3 py-2 rounded-lg mb-8">Form submitted successfully, someone will get back to you shortly</div>}
        <label className="mb-2 text-turquoise xl:col-span-1" htmlFor="name">Name</label>
        <input className="outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5" type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label className="mb-2 text-turquoise xl:ml-4 xl:col-span-1" htmlFor="email">Email</label>
        <input className="outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label className="mb-2 text-turquoise xl:col-span-1" htmlFor="message">Message</label>
        <textarea className="outline-none px-2 py-1 rounded-md mb-8 xl:col-span-11" id="message" name="message" rows="8" value={message} onChange={(e) => setMessage(e.target.value)} required />
        {/* <div className="g-recaptcha mb-8 xl:col-start-2" data-sitekey="6Ld-rpMhAAAAAGwR0yhNAcxZVhUGERwZxi7Yco35
        "></div> */}
        <ReCAPTCHA 
          className="xl:col-start-2"
          ref={recaptchaRef}
          size="compact"
          sitekey= {RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />
        <button className="xl:col-end-13 mb-4"  type="submit" disabled={submitting} >
          <div className="bg-turquoise px-4 py-2 w-fit rounded-full text-gray-900 hover:bg-indigo-900 hover:text-gray-200 duration-300 ease-in">Submit</div>
        </button>
      </form>
    </div>
  )
}

export default Contact;