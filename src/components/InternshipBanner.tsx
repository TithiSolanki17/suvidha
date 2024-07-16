// components/InternshipBanner.tsx
'use client';
import React from 'react';
import styles from './InternshipBanner.module.css';
import { ShinyButtonDemo } from './home_components/internbutton';
import ShinyButton from './ui/home_ui/shiny-button';

const InternshipBanner: React.FC = () => {
  const website = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform")
  }; 

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Apply For Internship and Mentorship Programs</h1>
        <p className={styles.paragraph}>
          Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.
        </p>
        <p className={styles.paragraph}>
          The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.
        </p>
        <button className={styles.button} onClick={website} >Apply Here →</button>
        {/* <ShinyButton text='Apply Here'/>
        <ShinyButtonDemo/> */}
      </div>
    </div>
  );
};

export default InternshipBanner;
