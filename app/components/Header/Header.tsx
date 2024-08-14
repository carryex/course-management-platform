import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaUserCircle, FaGlobe, FaBars } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Mock categories data
  const categories = [
    {
      title: 'Development',
      subcategories: ['Web Development', 'Data Science', 'Mobile Development'],
    },
    {
      title: 'Business',
      subcategories: ['Finance', 'Entrepreneurship', 'Communication'],
    },
    {
      title: 'IT & Software',
      subcategories: ['Networking', 'Hardware', 'Security'],
    },
  ];

  const handleMouseEnter = () => {
    setIsCategoriesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center flex-wrap">
      {/* Гамбургер-меню для мобильных устройств */}
      <button
        className="md:hidden text-gray-600 hover:text-gray-900"
      >
        <FaBars size={20} />
      </button>

      {/* Логотип */}
      <div className='md:flex-shrink-0 md:pr-2 flex-grow md:flex-grow-0'>
        <Link href={ROUTES.HOME.path} className='justify-center flex pl-9 md:pl-0'>
          <Image src="/next.svg" alt="Platform Logo" width={80} height={40} />
        </Link>
      </div>

      {/* Categories */}
      <div
        className="relative flex-shrink-0 px-2 hidden md:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
        >
          Categories
        </button>
        {isCategoriesOpen && (
          <div className="absolute left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
            {categories.map((category) => (
              <div key={category.title} className="border-b last:border-b-0">
                <div className="px-4 py-2 text-gray-600 hover:bg-gray-100">
                  {category.title}
                </div>
                <div className="pl-4">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      href="#"
                      key={subcategory}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Поиск */}
      <div className="flex-grow px-2 hidden md:block">
        <input
          type="text"
          placeholder="Search for anything"
          className="border rounded-full px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring"
        />
      </div>

      {/* Teach on Platform */}
      <Link href={ROUTES.TEACH.path} className="text-gray-600 hover:text-gray-900 px-2 flex-shrink-0 whitespace-nowrap lg:block hidden">
        Teach on Platform
      </Link>

      {/* Cart */}
      <Link href={ROUTES.CART.path} className="text-gray-600 hover:text-gray-900 px-2 flex-shrink-0">
        <FaShoppingCart size={20} />
      </Link>

      {/* Аутентификация */}
      <div className="flex-shrink-0 whitespace-nowrap px-2 hidden md:block">
        {isLoggedIn ? (
          <Link href={ROUTES.PROFILE.path}>
            <FaUserCircle size={30} />
          </Link>
        ) : (
          <>
            <Link href={ROUTES.LOGIN.path} className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded border mr-2">
              Log in
            </Link>
            <Link href={ROUTES.SIGNUP.path} className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-200">
              Sign up
            </Link>
          </>
        )}
      </div>

      {/* Language Selector */}
      <button className="pl-2 flex-shrink-0 text-gray-600 hover:text-gray-900">
        <FaGlobe size={20} />
      </button>
    </header>
  );
};

export default Header;
