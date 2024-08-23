import { tv } from 'tailwind-variants';

export const baseButton = tv({
  base: 'text-white inline-flex items-center justify-center font-semibold focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out rounded-md border text-nowrap',
  variants: {
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-md',
      lg: 'px-8 py-4 text-lg',
    },
    variant: {
      contained: '',
      outlined: 'border-opacity-50 hover:bg-opacity-5',
      text: '',
    },
    color: {
      primary:
        'border-indigo-600 bg-indigo-600 hover:border-indigo-700 hover:bg-indigo-700 ',
      secondary:
        'border-emerald-600 bg-emerald-600 hover:border-emerald-700 hover:bg-emerald-700 ',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-fit',
    },
  },
  compoundVariants: [
    {
      variant: 'contained',
      color: 'primary',
      class: '',
    },
    {
      variant: 'contained',
      color: 'secondary',
      class: '',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class: 'text-indigo-600 bg-white',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: 'text-emerald-600 bg-white',
    },
    {
      variant: 'text',
      color: 'primary',
      class: 'text-indigo-600 bg-transparent border-0 hover:bg-gray-300',
    },
  ],
  defaultVariants: {
    variant: 'contained',
    size: 'md',
    color: 'primary',
  },
});
