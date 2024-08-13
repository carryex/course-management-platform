import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Логотип */}
      <Link href="/">
        <Image src="/next.svg" alt="Course Management Platform Logo" width={80} height={40} />
      </Link>

      {/* Навигация */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/courses" className="text-gray-600 hover:text-gray-900">
          Courses
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">About
        </Link>
      </nav>

      {/* Поиск */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full px-3 py-1 text-gray-700 focus:outline-none focus:ring"
        />
      </div>

      {/* Аутентификация */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-blue-500 hover:text-blue-700"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
