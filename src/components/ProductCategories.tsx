import { siteConfig } from "../data/site";

interface ProductCategoriesProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function ProductCategories({ activeCategory, onCategoryChange }: ProductCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {siteConfig.categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`category-btn px-4 py-2 rounded-lg text-sm font-medium transition-all font-arabic ${
            activeCategory === cat.id
              ? "bg-primary text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}