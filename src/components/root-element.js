import React from 'react';
import Seo from '../components/seo';

import '../styles.css';

const RootElement = ({ children }) => {
  return (
    <>
      <Seo />
      {children}
    </>
  );
};

export default RootElement;
