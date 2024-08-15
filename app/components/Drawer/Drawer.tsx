import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'left' | 'right';
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  position = 'right',
}) => {
  const drawerPositionClasses =
    position === 'right'
      ? `right-0 translate-x-full`
      : `left-0 -translate-x-full`;
  const drawerOpenClass = isOpen ? 'transform-none' : '';

  const closeButtonPositionClasses =
    position === 'right' ? 'right-[260px]' : 'left-[260px]';

  return (
    <div className={`fixed inset-0 z-50 ${!isOpen ? 'hidden' : ''}`}>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
        role="presentation"
      ></div>

      {/* Close Button */}
      <div className={`absolute top-4 ${closeButtonPositionClasses} z-50`}>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 bg-white p-2 rounded-full shadow-lg"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 h-full bg-white shadow-lg w-[250px] transform transition-transform duration-300 ease-in-out ${drawerPositionClasses} ${drawerOpenClass}`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
