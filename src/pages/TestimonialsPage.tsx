import { Star } from "lucide-react";
import { testimonials } from "../data/site";

export function TestimonialsPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-gold text-gold" : "text-gray-200"}`}
      />
    ));
  };

  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-arabic">آراء العملاء</h1>
          <p className="text-white/70 mt-2 font-arabic">ماذا يقول عملاؤنا عن منتجات نُخبة</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">{averageRating}</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {renderStars(Math.round(Number(averageRating)))}
              </div>
              <p className="text-sm text-gray-500 mt-1 font-arabic">متوسط التقييم</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{testimonials.length}</div>
              <p className="text-sm text-gray-500 mt-1 font-arabic">تقييمات موثقة</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-gray-500 mt-1 font-arabic">عملاء راضون</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-1 mb-3">
                {renderStars(t.rating)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 font-arabic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-primary-dark font-arabic">{t.name}</p>
                  <p className="text-xs text-gray-500 font-arabic">{t.location}</p>
                </div>
              </div>
              {t.product && (
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gold font-medium font-arabic">
                  ✅ المنتج: {t.product}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}