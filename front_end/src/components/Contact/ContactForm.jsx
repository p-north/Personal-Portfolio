import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const contactFrom = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMain, setUserMain] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    // email js variables setup
    const service_id = 'service_cyh3edn';
    const template_id = 'template_tekosi6';
    const public_key = 'UvgdtVMfnw1Zbvp9N'

    //email js object with template params
    const templateParams = {
      from_name: userName,
      from_email: userEmail,
      to_name: 'Puneet',
      message: userMain,
    };

    //send the email using email js
    emailjs.send(service_id, template_id, templateParams, public_key)
      .then((response) =>{
        console.log('Email sent succesfully', response);
        setUserName('');
        setUserEmail('');
        setUserMain('');
      })
      .catch((error)=>{
        console.error('Error sending email:', error);
      });

  };


  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="flex flex-col items-center mx-auto justify-center px-4 sm:px-6 max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold md:text-4xl">Any Questions?</h1>
          <h2 className="text-xl font-medium md:text-2xl mt-5">
            Send Me A Message!
          </h2>

          <form onSubmit={handleSubmit} className="p-10 flex flex-col w-full max-w-lg shadow-md rounded-lg">
            <label htmlFor="name" className="text-lg font-medium mb-1">
              Name
            </label>
            <input
              className="p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="text"
              name="usrName"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="email" className="text-lg font-medium mb-1">
              Email
            </label>
            <input
              className="p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="text"
              name="usrEmail"
              placeholder="Your Email"
              value = {userEmail}
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label htmlFor="main" className="text-lg font-medium mb-1">
              Message
            </label>
            <textarea
              className="p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              name="usrMain"
              id="main"
              placeholder="Write something..."
              value={userMain}
              required
              onChange={(e)=> setUserMain(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 text-white rounded-md p-3   hover:bg-gray-700 shadow-md hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default contactFrom;
