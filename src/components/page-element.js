import React from 'react';
import { Link } from 'gatsby';

const PageElement = ({ children }) => {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <>
      <header>{pathname === '/' ? null : <Link to="/">Back</Link>}</header>
      {children}
    </>
  );
};

export default PageElement;
