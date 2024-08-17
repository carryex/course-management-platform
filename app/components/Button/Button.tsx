import React from 'react';
import Link from 'next/link';
import { baseButton } from './Button.styles';
import { VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof baseButton>;

interface ButtonProps extends ButtonVariants {
  disabled?: boolean;
  onClick?: () => void;
  link?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant,
    size,
    color,
    link,
    href,
    children,
    onClick,
    disabled,
    fullWidth,
  } = props;
  const buttonClass = baseButton({ variant, size, color, fullWidth });

  if (link && href) {
    return (
      <Link href={href} className={buttonClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
