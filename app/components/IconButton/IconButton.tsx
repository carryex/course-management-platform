import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface IconButtonProps {
  variant?: 'button' | 'link';
  href?: string;
  icon: IconType;
  onClick?: () => void;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'button',
  href,
  icon: Icon,
  onClick,
  size = 20,
}) => {
  const baseClasses = 'text-gray-600 hover:text-gray-900';

  const classes = `${baseClasses}`;

  if (variant === 'link' && href) {
    return (
      <Link href={href} className={classes}>
        <Icon size={size} />
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <Icon size={size} />
    </button>
  );
};

export default IconButton;
