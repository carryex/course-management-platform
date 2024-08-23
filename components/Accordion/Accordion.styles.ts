import { tv } from 'tailwind-variants';

export const baseAccordionStyles = tv({
  slots: {
    wrapper: '',
    base: 'border-b border-white py-4 cursor-pointer',
    button: 'w-full py-4 focus:outline-none',
    header: 'flex flex-row text-xl text-white justify-between',
    title: 'inline font-semibold',
    icon: 'items-center flex',
    contentWrapper: 'overflow-hidden',
    content: 'py-2',
  },
  variants: {
    variant: {
      list: {},
      buttons: {
        wrapper: 'flex flex-col gap-4',
        base: 'border-0 rounded-md hover:bg-gray-700 px-4 py-4',
        content: 'text-gray-400 font-medium',
        button: 'p-0',
        title: 'text-gray-400',
      },
    },
    open: {
      true: {
        icon: 'rotate-90',
        title: 'text-white',
      },
    },
  },
  compoundVariants: [
    { open: true, variant: 'buttons', className: 'bg-gray-700' },
  ],
});
