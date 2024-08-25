'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaGlobe, FaBars } from 'react-icons/fa';
import { ROUTES } from '../../app/constants/routes';
import Drawer from '../Drawer';
import CategoryList from '../CategoryList';
import AuthButtons from '../AuthButtons';
import IconButton from '../IconButton';

interface HeaderProps {
  isLoggedIn?: boolean;
  categories?: Array<{
    title: string;
    subcategories: string[];
  }>;
  languages?: string[];
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn = false,
  categories,
  languages,
}) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const languageMenuRef = useRef<HTMLDivElement>(null);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMouseEnter = () => {
    setIsCategoriesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCategoriesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  return (
    <header className="bg-white py-4 px-4 sm:px-8 md:px-16 lg:px-24 flex justify-between items-center flex-wrap">
      <div className="md:hidden justify-center flex">
        <IconButton onClick={toggleDrawer} icon={FaBars} />
      </div>

      <div className="md:flex-shrink-0 md:pr-2 flex-grow md:flex-grow-0">
        <Link
          href={ROUTES.HOME.path}
          className="justify-center flex pl-9 md:pl-0"
        >
          <Image src="/next.svg" alt="Platform Logo" width={80} height={40} />
        </Link>
      </div>

      {categories && (
        <div
          className="relative flex-shrink-0 px-2 hidden md:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Categories
          </button>
          {isCategoriesOpen && (
            <div className="absolute left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
              <CategoryList categories={categories} />
            </div>
          )}
        </div>
      )}
      <div className="flex-grow px-2 hidden md:block">
        <input
          type="text"
          placeholder="Search for anything"
          className="border rounded-full px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring"
        />
      </div>

      <Link
        href={ROUTES.TEACH.path}
        className="text-gray-600 hover:text-gray-900 px-2 flex-shrink-0 whitespace-nowrap lg:block hidden"
      >
        Teach on Platform
      </Link>

      <div className="justify-center flex px-2 flex-shrink-0">
        <IconButton
          icon={FaShoppingCart}
          variant="link"
          href={ROUTES.CART.path}
        />
      </div>

      <div className="flex-shrink-0 whitespace-nowrap px-2 hidden md:block">
        <AuthButtons />
      </div>

      {languages && (
        <div className="relative flex" ref={languageMenuRef}>
          <div className="justify-center flex pl-2 flex-shrink-0">
            <IconButton icon={FaGlobe} onClick={toggleLanguageMenu} />
          </div>

          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-6 w-32 bg-white shadow-lg rounded-lg py-2 z-50">
              {languages.map((language) => (
                <button
                  key={language}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsLanguageMenuOpen(false)}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} position="left">
        {categories && <CategoryList categories={categories} />}
        <div className="mt-4">
          <AuthButtons />
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
