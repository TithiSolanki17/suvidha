'use client';
import React, { useEffect, useState } from 'react';

const CustomFooter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'black', color: '#fefefe', position: 'static', width: '100%', bottom: 0, left: 0 }}>
      <div style={{ color: '#f5ee22', maxWidth: '1010px', width: '90%', textTransform: 'uppercase', margin: '0 auto', marginBottom: '3rem', fontFamily: 'Gill Sans, "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif' }}>
        <h2>Suvidha Foundation</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '1.5rem' }}>
        <div style={{ marginRight: '2rem' }}>
          <h4>Social</h4>
          <a href="#"><i className="fab fa-linkedin"></i> Linkedin</a>
          <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
        <div style={{ marginRight: '2rem' }}>
          <h4>Quick links</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>   
        </div>
        <div>
          <h4 className="address">Address</h4>
          <p>
            <strong>Nagpur Headquarter:</strong><br />
            Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102
          </p>
          <p>
            <strong>Hyderabad Headquarter:</strong><br />
            Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
          </p>
          <h4 className="mobile">Mobile</h4>
          <p><a href="tel:+917020044091">+91 7020044091</a></p>
          <h4 className="mail">Email</h4>
          <p><a href="mailto:info@suvidhafoundationedutech.org">info@suvidhafoundationedutech.org</a></p>
        </div>
      </div>
      <footer>
        <hr />
        Suvidha Foundation (Suvidha Mahila Mandal)
      </footer>
    </div>
  );
};

export default CustomFooter;
