import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../data/site";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const renderStars = (rating: number | null | undefined) => {
    if (!rating) return null;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < Math.round(rating) ? "fill-gold text-gold" : "text-gray-200"}`}
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
    "our-products": "⭐",
  };

  const itemWeight = product.size || product.weight || "";
  const hasDiscount = product.discount_percentage && product.discount_percentage > 0;
  const currentPrice = product.sale_price ?? product.price;
  const originalPriceValue = product.originalPrice ?? product.price;
  const discountValue = product.discount_percentage ?? product.discount ?? 0;

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div className="group relative">
      {/* Glassmorphism Card */}
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]"
      >
        {/* Top Section with Icon */}
        <div className="relative h-44 bg-gradient-to-br from-primary/5 via-gold/5 to-white/60 flex items-center justify-center overflow-hidden backdrop-blur-sm">
          {/* Decorative glass circles */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/10 rounded-full blur-xl" />

          {product.image && product.image.startsWith("http") ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          ) : (
            <span className="text-6xl opacity-60 group-hover:scale-125 transition-transform duration-700 drop-shadow-lg">
              {categoryIcons[product.category] || "🌿"}
            </span>
          )}

          {/* Discount Badge - Red */}
          {hasDiscount && product.inStock !== false && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm font-arabic">
              -{discountValue}%
            </span>
          )}

          {/* Out of Stock Badge - Gray */}
          {product.inStock === false && (
            <span className="absolute top-3 left-3 bg-gray-600/80 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm font-arabic">
              نفدت الكمية
            </span>
          )}
        </div>

        {/* Info Section */}
        <div className="p-4 relative">
          {/* Category Icon */}
          <div className="text-3xl mb-2 text-center">
            {categoryIcons[product.category] || "🌿"}
          </div>

          {/* Stars */}
          {product.rating && product.rating > 0 && (
            <div className="flex items-center justify-center gap-1 mb-2">
              <div className="flex items-center gap-0.5">
                {renderStars(product.rating)}
              </div>
              <span className="text-xs text-gray-400 mr-1">({product.reviews})</span>
            </div>
          )}

          {/* Product Name */}
          <h3 className="text-sm font-bold text-gray-800 mb-1.5 line-clamp-2 font-arabic leading-relaxed text-center">
            {product.name}
          </h3>

          {/* Origin */}
          {product.origin && (
            <p className="text-xs text-gray-400 mb-1 text-center font-arabic">📍 {product.origin}</p>
          )}

          {/* Size/Weight */}
          {itemWeight && (
            <p className="text-xs text-gray-500 mb-3 text-center font-arabic">{itemWeight}</p>
          )}

          {/* Price */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-lg font-bold text-primary">{currentPrice} <span className="text-xs">ج.م</span></span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">{originalPriceValue} ج.م</span>
            )}
          </div>

          {/* Add to Cart Button - replaces WhatsApp */}
          {product.inStock !== false ? (
            <button
              onClick={handleAddClick}
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-light text-white text-sm font-bold py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 font-arabic"
            >
              <ShoppingCart className="w-4 h-4" />
              أضف إلى السلة 🛒
            </button>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-2 w-full bg-gray-300 text-gray-500 text-sm font-bold py-2.5 rounded-xl cursor-not-allowed font-arabic"
            >
              نفدت الكمية
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}