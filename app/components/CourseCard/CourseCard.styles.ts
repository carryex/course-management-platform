import { tv } from 'tailwind-variants';

const courseCardStyles = tv({
  base: 'border rounded-md bg-white relative min-h-72 flex flex-col cursor-pointer transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300 ease-in-out z-50 border-gray-900 overflow-hidden',
  variants: {
    variant: {
      free: {
        careerWrapper: 'border-0',
      },
      career: {
        base: 'transform -translate-y-1 translate-x-1 border-gray-900',
        header: 'text-white bg-gray-900',
        careerWrapper: 'border border-white ',
      },
    },
  },
  slots: {
    careerWrapper: 'rounded-md overflow-hidden',
    header: 'bg-gray-100 py-2 px-4 text-sm font-mono',
    body: 'p-4 flex grow flex-col',
    title: 'text-xl font-bold',
    description: 'text-gray-700 mt-2',
    footer: 'px-4 flex flex-col w-full',
    footerItem: 'border-t flex flex-row justify-between items-center py-2',
    withIcon: 'flex items-center',
    icon: 'mr-2',
    absoluteLayout:
      'absolute w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-md border bg-white top-2 left-2 transform group-hover:translate-y-1 group-hover:-translate-x-1 transition-all duration-300 ease-in-out',
    cardContainer: 'relative p-2 rounded-md w-full h-full group',
  },
});

export default courseCardStyles;
