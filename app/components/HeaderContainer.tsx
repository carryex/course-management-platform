'use client';

import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '../../components/Header/Header';
import { categories, languages } from '../../components/Header/Header.mock';

const HeaderContainer = () => {
  const { data: session } = useSession();

  const isLoggedIn = !!session;

  return (
    <Header
      categories={categories}
      languages={languages}
      isLoggedIn={isLoggedIn}
    />
  );
};

export default HeaderContainer;
