import React from 'react';
import Header from './Header';
import { categories, languages } from './Header.mock';

const HeaderContainer = () => {
  return <Header categories={categories} languages={languages} />;
};

export default HeaderContainer;
