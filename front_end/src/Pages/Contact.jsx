import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import SocialLinks from "../components/Contact/SocialLinks";

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <SocialLinks />
      <ContactForm />
    </div>
  );
};

export default Contact;
