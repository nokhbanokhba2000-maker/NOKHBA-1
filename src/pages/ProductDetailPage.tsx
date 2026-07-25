import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Shield, Truck, RotateCcw, MessageCircle, Minus, Plus } from "lucide-react";
import { products, siteConfig } from "../data/site";
import type { Product } from "../data/site";
import { useState } from "react";

interface ProductDetailPageProps {
  onAddToCart: (product: Product) => void;
}

export function ProductDetailPage({ onAddToCart }: ProductDetailPageProps) {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  const renderStars = (rating: number | null | undefined, size: number = 5) => {
    if (!rating) return null;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-${size} h-${size} ${i < Math.round(rating) ? "fill-gold text-gold" : "text-gray-200"}`}
      />
    ));
  };

  const itemWeight = product?.size || product?.weight || "";
  const currentPrice = product?.sale_price ?? product?.price ?? 0;
  const originalPriceValue = product?.originalPrice ?? product?.price ?? 0;
  const hasDiscount = product?.discount_percentage && product.discount_percentage > 0;
  const discountValue = product?.discount_percentage ?? product?.discount ?? 0;

  const handleAddToCart = () => {
    if (product) {
      if (product.inStock === false) return;
      for (let i = 0; i < quantity; i++) {
        onAddToCart(product);
      }
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2 font-arabic">المنتج غير موجود</h2>
          <Link to="/products" className="text-primary font-medium font-arabic">عودة للمنتجات</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-primary font-arabic">الرئيسية</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary font-arabic">المنتجات</Link>
          <span>/</span>
          <span className="text-primary font-arabic truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="bg-gradient-to-br from-primary/5 to-gold/5 p-8 flex items-center justify-center min-h-[300px] md:min-h-[500px] relative">
              {product.image && product.image.startsWith("http") ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-[400px] object-contain rounded-xl"
                />
              ) : (
                <div className="text-center">
                  <span className="text-9xl opacity-60">{categoryIcons[product.category] || "🌿"}</span>
                </div>
              )}
              {product.badge && (
                <span className="absolute top-4 right-4 bg-gold text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full font-arabic">
                  {product.badge}
                </span>
              )}
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full font-arabic">
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-1 mb-2">
                {renderStars(product.rating, 5)}
                <span className="text-sm text-gray-400 mr-2">({product.reviews} تقييم)</span>
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-primary-dark mb-2 font-arabic">{product.name}</h1>
              <p className="text-gray-500 text-sm mb-2 font-arabic">{itemWeight}</p>
              {product.origin && (
                <p className="text-xs text-gray-400 mb-2">📍 {product.origin}</p>
              )}
              <p className="text-gray-600 leading-relaxed mb-4 font-arabic text-sm">{product.description}</p>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl md:text-3xl font-bold text-primary">{currentPrice} <span className="text-lg">ج.م</span></span>
                {hasDiscount && (
                  <span className="text-lg text-gray-400 line-through">{originalPriceValue} ج.م</span>
                )}
                {hasDiscount && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">-{discountValue}%</span>
                )}
              </div>

              {/* In Stock Indicator */}
              {product.inStock === false ? (
                <div className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-gray-200 text-gray-500 mb-4">
                  نفدت الكمية
                </div>
              ) : (
                <>
                  {/* Quantity */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-gray-700 font-arabic">الكمية:</span>
                    <div className="flex items-center gap-1 border border-gray-200 rounded-xl">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all shadow-lg ${
                      addedToCart
                        ? "bg-green-500 text-white"
                        : "bg-primary text-white hover:bg-primary-light shadow-primary/20"
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {addedToCart ? "تمت الإضافة ✓" : "أضف إلى السلة"}
                  </button>
                </>
              )}

              {/* WhatsApp Contact - informational only, not order */}
              {product.inStock !== false && (
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 mt-3 py-3 rounded-xl font-bold bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  استفسار عبر واتساب
                </a>
              )}

              {/* Product Features */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-arabic">منتج أصلي</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="font-arabic">شحن سريع</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <RotateCcw className="w-4 h-4 text-primary" />
                  <span className="font-arabic">استرجاع مجاني</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <span className="text-primary">🌿</span>
                  <span className="font-arabic">طبيعي 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary-dark mb-6 font-arabic">منتجات مشابهة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => {
                const RelatedCard = ({ product: rp }: { product: Product }) => (
                  <Link to={`/product/${rp.id}`} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center overflow-hidden">
                      {rp.image && rp.image.startsWith("http") ? (
                        <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                      ) : (
                        <span className="text-5xl opacity-40">{categoryIcons[rp.category] || "🌿"}</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2 font-arabic">{rp.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{rp.weight}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-primary">{rp.price} ج.م</span>
                        {rp.originalPrice && rp.originalPrice > rp.price && (
                          <span className="text-xs text-gray-400 line-through">{rp.originalPrice} ج.م</span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
                return <RelatedCard key={p.id} product={p} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}