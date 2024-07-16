'use client';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const CustomFooter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-black text-white w-full">
      <div className="text-yellow-300 max-w-screen-xl mx-auto my-12 text-center font-semibold text-lg uppercase">
        <h2>Suvidha Foundation</h2>
      </div>
      <div className="flex flex-wrap justify-around mx-6 my-6">
        <div className="mb-6 w-full md:w-auto text-center">
          <h4 className="text-lg font-bold mb-2">Social</h4>
          <div className="flex flex-col items-center space-y-1">
            <a href="https://www.linkedin.com/company/suvidha-foundation/mycompany/" className="hover:underline" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a>
            <a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="https://www.linkedin.com/company/suvidha-foundation/mycompany/" className="hover:underline" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://www.instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y%3D" className="hover:underline" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
        <div className="mb-6 w-full md:w-auto text-center">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <div className="flex flex-col items-center space-y-1">
            <a href="/" className="hover:underline" target="_blank" rel="noopener noreferrer">Home</a>
            <a href="/pages/about" className="hover:underline" target="_blank" rel="noopener noreferrer">About</a>
            <a href="/" className="hover:underline" target="_blank" rel="noopener noreferrer">Blogs</a>
            <a href="/pages/contact" className="hover:underline" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
        </div>
        <div className="w-full md:w-auto text-center">
          <h4 className="text-lg font-bold mb-2">Address</h4>
          <p className="mb-2">
            <strong>Nagpur Headquarter:</strong><br />
            Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102
          </p>
          <p className="mb-2">
            <strong>Hyderabad Headquarter:</strong><br />
            Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
          </p>
          <h4 className="text-lg font-bold mb-2">Mobile</h4>
          <p className="mb-2"><a href="tel:+917020044091" className="hover:underline">+91 7020044091</a></p>
          <h4 className="text-lg font-bold mb-2">Email</h4>
          <p><a href="mailto:info@suvidhafoundationedutech.org" className="hover:underline">info@suvidhafoundationedutech.org</a></p>
        </div>
      </div>
      <footer className="text-center py-4">
        <hr className="border-gray-700"/>
        <p>Suvidha Foundation (Suvidha Mahila Mandal)</p>
      </footer>
    </div>
  );
};

export default CustomFooter;
