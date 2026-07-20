import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Shield, Truck, Leaf, BadgeCheck, MessageCircle, ShoppingCart, Sparkles, Timer, Package, Award } from "lucide-react";
import { products, testimonials, whyChooseUs, siteConfig } from "../data/site";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../data/site";

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export function HomePage({ onAddToCart }: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const oliveOilProducts = products.filter(p => p.category === "olive-oil").slice(0, 4);
  const offersProducts = products.filter(p => p.category === "offers").slice(0, 4);
  const hairOilProducts = products.filter(p => p.category === "hair-oils").slice(0, 4);
  const naturalOilsProducts = products.filter(p => p.category === "natural-oils").slice(0, 4);
  const soapProducts = products.filter(p => p.category === "soap").slice(0, 4);
  const honeyProducts = products.filter(p => p.category === "honey").slice(0, 4);
  const datesProducts = products.filter(p => p.category === "dates").slice(0, 4);
  const newArrivals = products.filter(p => p.badge === "جديد").slice(0, 4);

  const topSelling = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 8);

  const featuredCategories = [
    { id: "olive-oil", label: "زيت زيتون بكر ممتاز", icon: "🫒", desc: "أجود أنواع زيت الزيتون البكر الممتاز من مطروح وسيوة، معصور على البارد", color: "from-green-500/20 to-yellow-500/20", count: products.filter(p => p.category === "olive-oil").length },
    { id: "offers", label: "العروض و الخصومات", icon: "🏷️", desc: "عروض وتخفيضات مذهلة على منتجاتنا المختارة", color: "from-red-500/20 to-orange-500/20", count: products.filter(p => p.category === "offers").length },
    { id: "hair-oils", label: "زيوت الشعر الخطير", icon: "💎", desc: "مجموعات متكاملة للعناية بالشعر من أشهر الماركات", color: "from-purple-500/20 to-pink-500/20", count: products.filter(p => p.category === "hair-oils").length },
    { id: "natural-oils", label: "زيوت طبيعية", icon: "🫗", desc: "مجموعة واسعة من الزيوت الطبيعية للعناية بالبشرة والشعر", color: "from-amber-500/20 to-orange-500/20", count: products.filter(p => p.category === "natural-oils").length },
    { id: "cosmetics", label: "مستحضرات التجميل", icon: "💄", desc: "أجود مستحضرات التجميل والعناية الشخصية", color: "from-pink-500/20 to-rose-500/20", count: products.filter(p => p.category === "cosmetics").length },
    { id: "soap", label: "صابون العناية بالبشرة", icon: "🧼", desc: "صابون طبيعي يدوي الصنع للعناية ببشرتك", color: "from-blue-500/20 to-cyan-500/20", count: products.filter(p => p.category === "soap").length },
    { id: "honey", label: "عسل نحل والطحينه", icon: "🍯", desc: "عسل نحل طبيعي وطحينة خام من أفضل المصادر", color: "from-yellow-500/20 to-amber-500/20", count: products.filter(p => p.category === "honey").length },
    { id: "dates", label: "تمر", icon: "🌴", desc: "تمور فاخرة من واحة سيوه ومطروح", color: "from-brown-500/20 to-amber-500/20", count: products.filter(p => p.category === "dates").length },
    { id: "spices", label: "التوابل والبهارات", icon: "🌶️", desc: "بهارات وتوابل طبيعية من أجود المحاصيل", color: "from-red-500/20 to-yellow-500/20", count: products.filter(p => p.category === "spices").length },
    { id: "tea-coffee", label: "شاي الزرده والبن", icon: "🫖", desc: "أجود أنواع الشاي والبن الفاخر", color: "from-green-500/20 to-teal-500/20", count: products.filter(p => p.category === "tea-coffee").length },
    { id: "olives", label: "زيتون سيوي", icon: "🫒", desc: "زيتون سيوي الفاخر بمختلف الأنواع", color: "from-green-500/20 to-lime-500/20", count: products.filter(p => p.category === "olives").length },
    { id: "aromatic-oils", label: "زيوت عطرية", icon: "🌸", desc: "زيوت عطرية طبيعية نقية جديدة من نخبة", color: "from-violet-500/20 to-purple-500/20", count: products.filter(p => p.category === "aromatic-oils").length },
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
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-center py-2 px-4 text-xs md:text-sm font-arabic">
        🚚 توصيل لجميع أنحاء مصر | 📞 واتساب: {siteConfig.whatsappNumber} | 🎉 خصومات تصل إلى 38%
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-cream to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAwIDEgMjAgMjAgMjAgMjAgMCAwIDEtMjAgMjAgMjAgMjAgMCAwIDEtMjAtMjAgMjAgMjAgMCAwIDEgMjAtMjB6IiBmaWxsPSIjMmQ1YTI3IiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full mb-4">
                <Leaf className="w-4 h-4" />
                <span>منتجات طبيعية 100% من مطروح وسيوة</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-4">
                🌿 <span className="text-gold">نُخبة</span>
                <br />
                <span className="text-xl md:text-2xl text-primary">خيرات سيوة ومطروح و زيت الزيتون</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                متجرك الأول لأجود المنتجات الطبيعية المستخرجة من واحات سيوة ومطروح. زيت زيتون بكر ممتاز، زيوت طبيعية، عسل نحل، بهارات عضوية، ومنتجات طبيعية مختارة بعناية.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
                >
                  تسوق الآن
                  <ArrowLeft className="w-4 h-4 rtl-flip" />
                </Link>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  واتساب: {siteConfig.whatsappNumber}
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-gold/10 to-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🌿</div>
                  <p className="text-2xl font-bold text-primary font-arabic">نُخبة</p>
                  <p className="text-gray-500 font-arabic text-sm">خيرات سيوة ومطروح</p>
                </div>
              </div>
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

      {/* Stats Bar */}
      <section className="bg-primary-dark text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">{products.length}+</div>
              <div className="text-xs md:text-sm text-white/70 font-arabic">منتج طبيعي</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">{testimonials.length}K+</div>
              <div className="text-xs md:text-sm text-white/70 font-arabic">عميل سعيد</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">{siteConfig.categories.length - 1}</div>
              <div className="text-xs md:text-sm text-white/70 font-arabic">قسم</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">98%</div>
              <div className="text-xs md:text-sm text-white/70 font-arabic">تقييم إيجابي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic mb-2">
              🌟 تصفح <span className="text-gold">أقسام</span> نُخبة
            </h2>
            <p className="text-gray-500 font-arabic">تشكيلة واسعة من أجود المنتجات الطبيعية من مطروح وسيوة</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="bg-gradient-to-br from-white to-cream rounded-xl p-4 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group text-center"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-2 text-2xl group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-xs font-bold text-primary-dark mb-1 font-arabic leading-tight">{cat.label}</h3>
                <p className="text-[10px] text-gray-400 font-arabic">{cat.count} منتج</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals - Aromatic Oils */}
      {newArrivals.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">
                  ✨ <span className="text-gold">جديد</span> نُخبة
                </h2>
                <p className="text-gray-500 font-arabic text-sm">أحدث المنتجات العطرية الطبيعية</p>
              </div>
              <Link to="/products?category=aromatic-oils" className="text-primary text-sm font-bold hover:underline font-arabic">
                عرض الكل ←
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Offers Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2">
                <Timer className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">
                  🏷️ <span className="text-red-500">العروض</span> و الخصومات
                </h2>
              </div>
              <p className="text-gray-500 font-arabic text-sm">خصومات تصل إلى 38% لفترة محدودة</p>
            </div>
            <Link to="/products?category=offers" className="text-red-500 text-sm font-bold hover:underline font-arabic">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offersProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">
                🌟 <span className="text-gold">الأكثر</span> مبيعاً
              </h2>
              <p className="text-gray-500 font-arabic text-sm">منتجات نالت ثقة عملائنا</p>
            </div>
            <Link to="/products" className="text-primary text-sm font-bold hover:underline font-arabic">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSelling.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Olive Oil Section */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">
                🫒 <span className="text-gold">زيت زيتون</span> بكر ممتاز
              </h2>
              <p className="text-gray-500 font-arabic text-sm">من مطروح وسيوة - معصور على البارد</p>
            </div>
            <Link to="/products?category=olive-oil" className="text-primary text-sm font-bold hover:underline font-arabic">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oliveOilProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Hair Oils Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">
                💎 <span className="text-gold">باكدج زيوت الشعر</span> الخطير
              </h2>
              <p className="text-gray-500 font-arabic text-sm">زيوت أصلية مستوردة للعناية الفائقة بالشعر</p>
            </div>
            <Link to="/products?category=hair-oils" className="text-primary text-sm font-bold hover:underline font-arabic">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hairOilProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Natural Oils Section */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">
                🫗 <span className="text-gold">زيوت</span> طبيعية
              </h2>
              <p className="text-gray-500 font-arabic text-sm">مجموعة واسعة من الزيوت الطبيعية للعناية بالبشرة والشعر</p>
            </div>
            <Link to="/products?category=natural-oils" className="text-primary text-sm font-bold hover:underline font-arabic">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {naturalOilsProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Soap Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic">
                🧼 <span className="text-gold">صابون</span> العناية بالبشرة
              </h2>
              <p className="text-gray-500 font-arabic text-sm">صابون طبيعي يدوي الصنع</p>
            </div>
            <Link to="/products?category=soap" className="text-primary text-sm font-bold hover:underline font-arabic">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {soapProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Honey & Dates Section */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary-dark font-arabic">
                  🍯 <span className="text-gold">عسل نحل</span> والطحينه الخام
                </h2>
                <Link to="/products?category=honey" className="text-primary text-sm font-bold hover:underline font-arabic">
                  عرض الكل ←
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {honeyProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary-dark font-arabic">
                  🌴 <span className="text-gold">تمر</span> سيوه
                </h2>
                <Link to="/products?category=dates" className="text-primary text-sm font-bold hover:underline font-arabic">
                  عرض الكل ←
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {datesProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic mb-2">
              ✨ لماذا <span className="text-gold">نُخبة</span>؟
            </h2>
            <p className="text-gray-500 font-arabic">نحن نقدم لكم أفضل تجربة تسوق للمنتجات الطبيعية</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-cream rounded-2xl p-6 border border-primary/10 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  {item.icon === "truck" && <Truck className="w-7 h-7 text-primary" />}
                  {item.icon === "leaf" && <Leaf className="w-7 h-7 text-primary" />}
                  {item.icon === "badge-check" && <BadgeCheck className="w-7 h-7 text-primary" />}
                  {item.icon === "origin" && <Package className="w-7 h-7 text-primary" />}
                  {item.icon === "price" && <Award className="w-7 h-7 text-primary" />}
                  {item.icon === "support" && <MessageCircle className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-arabic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-arabic mb-2">
              💬 آراء <span className="text-gold">عملائنا</span> الكرام
            </h2>
            <p className="text-gray-500 font-arabic">ما يقوله عملاؤنا عن منتجات نُخبة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.slice(0, 4).map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(t.rating)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 font-arabic line-clamp-3">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 font-arabic">{t.name}</p>
                    <p className="text-xs text-gray-400 font-arabic">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="text-primary font-bold text-sm hover:underline font-arabic">
              عرض جميع التقييمات ←
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-arabic">
            🌿 انضم لعائلة <span className="text-gold">نُخبة</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 font-arabic">
            اطلب الآن واستمتع بأجود المنتجات الطبيعية من مطروح وسيوة مع توصيل لجميع أنحاء مصر
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gold text-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition-colors shadow-xl"
            >
              تسوق الآن
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {siteConfig.whatsappNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}