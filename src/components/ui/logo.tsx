// components/Logo.js

//install: npm install styled-components
//npm install @types/styled-components

// components/Logo.js
"use client"
import Image from 'next/image';
import logo from '../../images_pndformat/suvidha_logo.png'; // Adjust the path according to your project structure
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const LogoImage = styled(Image)`
  width: 100px; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
  margin-right: 20px; /* Adjust margin as needed */
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;

