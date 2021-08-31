import React from 'react';
import PageElement from './src/components/page-element';

import './styles.css';

export const wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>;
};
