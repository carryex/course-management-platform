import { tv } from 'tailwind-variants';

export const baseAccordionStyles = tv({
  slots: {
    base: 'border-b border-white py-4',
    button: 'w-full py-4 focus:outline-none',
    header: 'flex flex-row text-xl text-white justify-between',
    title: 'inline font-semibold',
    icon: 'items-center flex',
    contentWrapper: 'overflow-hidden',
    content: 'py-3',
  },
  variants: {
    open: {
      true: {
        icon: 'rotate-90',
      },
    },
  },
});
