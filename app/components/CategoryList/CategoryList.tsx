import Link from 'next/link';

interface CategoryListProps {
  categories: Array<{
    title: string;
    subcategories: string[];
  }>;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => (
  <>
    {categories.map((category) => (
      <div key={category.title} className="border-b last:border-b-0">
        <div className="px-4 py-2 text-gray-600 hover:bg-gray-100">
          {category.title}
        </div>
        <div className="pl-4">
          {category.subcategories.map((subcategory) => (
            <Link
              href="#"
              key={subcategory}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              {subcategory}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default CategoryList;
