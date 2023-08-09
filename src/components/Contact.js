import React from 'react';

function Contact() {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center">
      <h1 className="text-[#58C277] text-3xl font-bold mb-4">Contact</h1>
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <p className="text-xl font-semibold mb-2">Get in touch:</p>
        <p className="text-gray-600 mb-2">
          Email: <a href="mailto:prakashtarun313@gmail.com">prakashtarun313@gmail.com</a>
        </p>
        <p className="text-gray-600 mb-2">Phone: <a href="tel:+919392472282">(91) 9392472282</a></p>
        <p className="text-gray-600 mb-2 hover:text-yellow-300">
          LinkedIn: <a href="https://www.linkedin.com/in/tarun-prakash-poram/">Your LinkedIn Profile</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
