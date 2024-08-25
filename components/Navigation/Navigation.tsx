'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  upgrade?: boolean;
};

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/learn',
    icon: <FaShoppingCart />,
  },
  {
    label: 'My learning',
    href: '/learn/learning',
    icon: <FaShoppingCart />,
  },
  {
    label: 'Events',
    href: '/learn/events',
    icon: <FaShoppingCart />,
  },
  {
    label: 'Projects',
    href: '/learn/projects',
    icon: <FaShoppingCart />,
    upgrade: true,
  },
  {
    label: 'Workspaces',
    href: '/learn/workspaces',
    icon: <FaShoppingCart />,
  },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const linkRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const currentLinkIndex = navItems.findIndex(
      (item) => item.href === pathname
    );

    if (
      currentLinkIndex !== -1 &&
      indicatorRef.current &&
      linkRef.current[currentLinkIndex]
    ) {
      const currentLink = linkRef.current[currentLinkIndex];
      indicatorRef.current.style.top = `${currentLink?.offsetTop}px`;
    }
  }, [pathname]);

  return (
    <nav className="w-full bg-gray-50 flex flex-col gap-2">
      {navItems.map((item, index) => {
        const isActive = item.href === pathname;
        return (
          <Link
            className={`flex py-3 px-6 flex-row w-full text-gray-900 hover:text-indigo-600 transition-all duration-300 relative ${isActive ? 'font-bold' : ''}`}
            href={item.href}
            key={item.href}
            ref={(el) => {
              linkRef.current[index] = el;
            }}
          >
            <FaShoppingCart size={24} className="mr-3" />
            <span className={`flex-grow text-lg`}>{item.label}</span>
          </Link>
        );
      })}
      <span
        className="absolute left-0 top-0  h-12 w-full bg-gray-800 bg-opacity-5 border-l-4 border-slate-800 transition-all duration-300"
        ref={indicatorRef}
      />
    </nav>
  );
};

export default Navigation;
