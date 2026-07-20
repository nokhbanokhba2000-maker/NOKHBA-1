import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../data/site";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? "fill-gold text-gold" : "text-gray-200"}`}
      />
    ));
  };

  const categoryIcons: Record<string, string> = {
    "olive-oil": "🫒",
    "offers": "🏷️",
    "hair-oils": "💎",
    "cosmetics": "💄",
    "soap": "🧼",
    "natural-oils": "🫗",
    "dates": "🌴",
    "spices": "🌶️",
    "honey": "🍯",
    "tea-coffee": "🫖",
    "olives": "🫒",
    "nuts": "🥜",
    "henna": "🌿",
    "herbal": "🌿",
    "aromatic-oils": "🌸",
  };

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <Link to={`/product/${product.id}`} className="product-card bg-white rounded-xl border border-gray-100 overflow-hidden group block">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center overflow-hidden">
        {product.image && product.image.startsWith("http") ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <span className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
            {categoryIcons[product.category] || "🌿"}
          </span>
        )}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-gold text-primary-dark text-xs font-bold px-3 py-1 rounded-full font-arabic">
            {product.badge}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full font-arabic">
            -{product.discount}%
          </span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); onAddToCart(product); }}
          className="absolute bottom-3 left-3 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-primary-light"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-1">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-400 mr-1">({product.reviews})</span>
        </div>
        <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2 font-arabic leading-relaxed">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2 font-arabic">{product.weight}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-base font-bold text-primary">{product.price} <span className="text-xs">ج.م</span></span>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through mr-2">{product.originalPrice} ج.م</span>
            )}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(product); }}
            className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors font-arabic font-medium"
          >
            أضف للسلة
          </button>
        </div>
      </div>
    </Link>
  );
}