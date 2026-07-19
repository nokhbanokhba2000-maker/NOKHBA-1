import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Shield, Truck, Leaf, BadgeCheck, MapPin, Play } from "lucide-react";
import { products, testimonials, whyChooseUs } from "../data/site";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../data/site";

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export function HomePage({ onAddToCart }: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const bestSellers = products.filter((p) => p.badge === "الأكثر مبيعاً" || p.rating >= 5).slice(0, 4);
  const featuredProducts = activeCategory === "all"
    ? products.slice(0, 4)
    : products.filter((p) => p.category === activeCategory).slice(0, 4);

  const categoryTabs = [
    { id: "all", label: "الكل" },
    { id: "olive-oil", label: "زيوت زيتون" },
    { id: "honey-dairy", label: "عسل ومنتجات نحل" },
    { id: "ghee", label: "سمن فلاحي" },
    { id: "natural-oils", label: "زيوت طبيعية" },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-gold text-gold" : "text-gray-200"}`}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-cream to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAwIDEgMjAgMjAgMjAgMjAgMCAwIDEtMjAgMjAgMjAgMjAgMCAwIDEtMjAtMjAgMjAgMjAgMCAwIDEgMjAtMjB6IiBmaWxsPSIjMmQ1YTI3IiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4" />
                <span>منتجات طبيعية 100% من مصر</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-6">
                🌿 عالم <span className="text-gold">نُخبة</span>
                <br />
                <span className="text-xl md:text-2xl lg:text-3xl text-primary">حيثُ تلتقي الأصالة بالجودة الطبيعية</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                في زمنٍ غابت فيه المكونات الحقيقية أطلقنا نُخبة | NOKHBA لنكون جسركم الموثوق نحو الطبيعة البكر وخيراتها الصافية. نحن لا نبيع مجرد منتجات بل ننتقي لكم نمط حياة صحي متكامل.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
                >
                  تسوق الآن
                  <ArrowLeft className="w-4 h-4 rtl-flip" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary/5 transition-colors"
                >
                  شاهد المنتجات
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-gold/10 to-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5" />
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🌿</div>
                  <p className="text-2xl font-bold text-primary font-arabic">نُخبة</p>
                  <p className="text-gray-500 font-arabic text-sm">منتجات طبيعية من القلب</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold text-primary">طبيعي 100%</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-gold" />
                  <span className="text-xs font-bold text-primary">جودة عالية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic mb-2">
              🌟 ماذا تجدون في <span className="text-gold">نُخبة</span>؟
            </h2>
            <p className="text-gray-500 font-arabic">تشكيلة واسعة من أجود المنتجات الطبيعية</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Olive Oil */}
            <Link to="/products?category=olive-oil" className="bg-cream rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group block">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🫒
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">زيت الزيتون</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-arabic">
                أجود أنواع زيت الزيتون البكر الممتاز من أفضل المزارع المصرية، معصور على البارد للحفاظ على كل العناصر الغذائية والنكهة الأصيلة.
              </p>
            </Link>

            {/* Card 2 - Thyme */}
            <Link to="/products?category=thyme" className="bg-cream rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group block">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🌿
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">الزعتر</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-arabic">
                زعتر مصري أصيل مخلوط بعناية من أجود أنواع الأعشاب الطبيعية والسمسم المحمص.
              </p>
            </Link>

            {/* Card 3 - Farm & Honey */}
            <Link to="/products?category=honey-dairy" className="bg-cream rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group block">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🍯
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">خيرات المزرعة والمناحل</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-arabic">
                السمن الفلاحي الأصلي (الجاموسي والبقري) المرمل وعسل النحل الطبيعي النقي بقطفاته الفاخرة وشمع النحل.
              </p>
            </Link>

            {/* Card 4 - Healthy Bakery */}
            <Link to="/products?category=healthy-bakery" className="bg-cream rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group block">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🍞
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">نظام الطيبات الصحي</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-arabic">
                العيش كامل الحبة والمخبوزات الصحية المصنوعة بعناية فائقة لغذاء متوازن وجسد حيوي.
              </p>
            </Link>

            {/* Card 5 - Beauty */}
            <Link to="/products?category=natural-oils" className="bg-cream rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group block">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🌸
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">نقاء الطبيعة للعناية والتجميل</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-arabic">
                زيوت طبيعية ومستخلصات عشبية جبلية للعناية بالبشرة والشعر ومستحضرات تجميل آمنة 100%.
              </p>
            </Link>

            {/* Card 6 - Herbs & Spices */}
            <Link to="/products?category=herbal" className="bg-cream rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group block">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🌶️
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">أعشاب وتوابل</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-arabic">
                تشكيلة من الأعشاب الطبيعية والتوابل المطحونة الطازجة لإضفاء النكهة الأصيلة على أطباقك.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Video Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,168,76,0.2)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <Play className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 font-arabic">🎬 انتظرونا قريباً..</h3>
              <p className="text-white/80 max-w-2xl mx-auto text-lg font-arabic">
                لأنكم تستحقون الأفضل نجهّز لكم حالياً انطلاقة بصرية وفنية غاية في الاحترافية. قريباً جداً سنأخذكم في جولات مرئية حية وفيديوهات تكشف أسرار منتجاتنا.
              </p>
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-6 py-2 rounded-full mt-6 text-sm font-bold">
                قريباً
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">الأكثر مبيعاً</h2>
              <p className="text-gray-500 text-sm mt-1 font-arabic">منتجات نالت ثقة عملائنا</p>
            </div>
            <Link to="/products" className="text-primary hover:text-primary-light font-medium text-sm flex items-center gap-1 font-arabic">
              عرض الكل
              <ArrowLeft className="w-4 h-4 rtl-flip" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic mb-2">
              لماذا تختار <span className="text-gold">نُخبة</span>؟
            </h2>
            <p className="text-gray-500 font-arabic">أسباب تجعلنا الخيار الأمثل لمنتجاتك الطبيعية</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {item.icon === "truck" && <Truck className="w-7 h-7 text-primary" />}
                  {item.icon === "leaf" && <Leaf className="w-7 h-7 text-primary" />}
                  {item.icon === "badge-check" && <BadgeCheck className="w-7 h-7 text-primary" />}
                  {item.icon === "origin" && <MapPin className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2 font-arabic">{item.title}</h3>
                <p className="text-gray-600 text-sm font-arabic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">آراء عملائنا</h2>
              <p className="text-gray-500 text-sm mt-1 font-arabic">ماذا يقولون عن منتجاتنا</p>
            </div>
            <Link to="/testimonials" className="text-primary hover:text-primary-light font-medium text-sm flex items-center gap-1 font-arabic">
              عرض الكل
              <ArrowLeft className="w-4 h-4 rtl-flip" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-cream rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(t.rating)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 font-arabic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-dark font-arabic">{t.name}</p>
                    <p className="text-xs text-gray-500 font-arabic">{t.location}</p>
                  </div>
                </div>
                {t.product && (
                  <div className="mt-3 text-xs text-gold font-medium font-arabic">
                    ✅ {t.product}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}