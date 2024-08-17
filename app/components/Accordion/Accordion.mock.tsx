import Accordion from './Accordion';

export const accordionItems = [
  {
    title: 'What is Tailwind CSS?',
    content: (
      <p className="text-white">
        Tailwind CSS is a utility-first CSS framework for rapidly building
        custom designs.
      </p>
    ),
  },
  {
    title: 'How does it work?',
    content: (
      <p className="text-white">
        Tailwind works by scanning your HTML files and removing any unused
        styles in your final build.
      </p>
    ),
  },
  {
    title: 'Why use Tailwind?',
    content: (
      <p className="text-white">
        Tailwind is a highly customizable, low-level CSS framework that gives
        you all of the building blocks you need to build bespoke designs without
        any annoying opinionated styles you have to fight to override.
      </p>
    ),
  },
];

const App = () => (
  <div className="p-4">
    <Accordion items={accordionItems} allowMultiple={true} />
  </div>
);

export default App;
