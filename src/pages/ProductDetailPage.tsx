import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { products } from "../data/site";
import type { Product } from "../data/site";

interface ProductDetailPageProps {
  onAddToCart: (product: Product) => void;
}

export function ProductDetailPage({ onAddToCart }: ProductDetailPageProps) {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "fill-gold text-gold" : "text-gray-200"}`}
      />
    ));
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

  const categoryIcons: Record<string, string> = {
    "olive-oil": "🫒",
    "ghee": "🧈",
    "honey-dairy": "🍯",
    "healthy-bakery": "🍞",
    "natural-oils": "🫗",
    "skincare": "🧴",
    "dates": "🌴",
    "tea": "🫖",
    "herbal": "🌿",
    "nuts": "🥜",
    "offers": "🏷️",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary font-arabic">الرئيسية</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary font-arabic">المنتجات</Link>
          <span>/</span>
          <span className="text-primary font-arabic">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="bg-gradient-to-br from-primary/10 to-gold/10 p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <div className="text-center">
                <span className="text-8xl md:text-9xl opacity-60">{categoryIcons[product.category] || "🌿"}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-400 mr-2">({product.reviews} تقييم)</span>
              </div>

              {product.badge && (
                <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {product.badge}
                </span>
              )}

              <h1 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3 font-arabic">{product.name}</h1>
              <p className="text-gray-500 text-sm mb-2 font-arabic">{product.weight}</p>
              <p className="text-gray-600 leading-relaxed mb-6 font-arabic">{product.description}</p>

              <div className="text-3xl font-bold text-primary mb-6">
                {product.price} <span className="text-lg">ج.م</span>
              </div>

              <button
                onClick={() => onAddToCart(product)}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
              >
                <ShoppingCart className="w-5 h-5" />
                أضف إلى السلة
              </button>

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
          <div className="mt-12">
            <h2 className="text-xl font-bold text-primary-dark mb-6 font-arabic">منتجات مشابهة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => {
                const RelatedCard = ({ product: rp }: { product: Product }) => (
                  <Link to={`/product/${rp.id}`} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                      <span className="text-5xl opacity-40">{categoryIcons[rp.category] || "🌿"}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-gray-800 mb-1 font-arabic">{rp.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{rp.weight}</p>
                      <span className="text-base font-bold text-primary">{rp.price} ج.م</span>
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