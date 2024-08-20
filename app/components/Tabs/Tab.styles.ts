import { tv } from 'tailwind-variants';

export const baseTabs = tv({
  compoundVariants: [],
  defaultVariants: {},
  slots: {
    button: 'py-2 px-4 text-lg',
    container: 'relative border-b border-gray-600 w-fit self-center mb-4',
    indicator:
      'absolute bottom-0 h-1 bg-yellow-500 transition-all duration-300',
    tabsContainer: 'flex justify-between',
    tabsWithContentContainer: 'flex flex-col',
    tabPanelContainer: 'transition-opacity duration-300',
    contentContainer: 'p-4',
  },
  variants: {
    isActive: {
      true: { button: 'text-yellow-500', tabPanelContainer: 'opacity-100' },
      false: { button: 'text-gray-500', tabPanelContainer: 'opacity-0' },
    },
  },
});
