import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products } from "../data/site";
import { ProductCard } from "../components/ProductCard";
import { ProductCategories } from "../components/ProductCategories";
import type { Product } from "../data/site";

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
}

export function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = searchQuery === "" || p.name.includes(searchQuery) || p.description.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center font-arabic">منتجاتنا</h1>
          <p className="text-white/70 text-center mt-2 font-arabic">
            تشكيلة واسعة من أجود المنتجات الطبيعية المصرية
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن منتج..."
              className="w-full pr-12 pl-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-right font-arabic"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto pb-2">
          <ProductCategories activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-500 font-arabic">
          {filtered.length} منتج
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg font-arabic">لا توجد منتجات مطابقة للبحث</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 text-primary font-medium text-sm font-arabic"
            >
              مسح الفلترة
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}