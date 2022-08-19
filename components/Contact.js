import React, { useState } from 'react';
import Link from 'next/link';
import { useFormspark } from "@formspark/use-formspark";
import { CONTACT_FORM_ID } from '../config';

const FORMSPARK_FORM_ID = "bA4bnUPj";

const Contact = () => {

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, message });
    alert("Form Submitted");
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-indigo-600 px-4 py-8 lg:px-12 rounded-xl grid xl:grid-cols-12 xl:gap-4">
        <h1 className='mb-8 text-offwhite text-5xl font-semibold xl:col-span-12'>
          Contact
        </h1>
        <label className="mb-2 text-turquoise xl:col-span-1" htmlFor="name">Name</label>
        <input className="outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5" type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required="" />
        <label className="mb-2 text-turquoise xl:ml-4 xl:col-span-1" htmlFor="email">Email</label>
        <input className="outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5" type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required="" />
        <label className="mb-2 text-turquoise xl:col-span-1" htmlFor="message">Message</label>
        <textarea className="outline-none px-2 py-1 rounded-md mb-8 xl:col-span-11" id="message" name="message" rows="8" value={message} onChange={(e) => setMessage(e.target.value)} required=""/>
        <button className="xl:col-end-13 mb-4" type="submit" diabled={submitting}>
          <div className="bg-turquoise px-4 py-2 w-fit rounded-full text-gray-900 hover:bg-indigo-900 hover:text-gray-200 duration-300 ease-in">Submit</div>
        </button>
      </form>
    </div>
  )
}

export default Contact;