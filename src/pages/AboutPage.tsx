import { Link } from "react-router-dom";
import { Leaf, Award, Heart, Users, Shield, Sparkles } from "lucide-react";

export function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-arabic">عن نُخبة</h1>
          <p className="text-white/70 mt-2 font-arabic">حيثُ تلتقي الأصالة بالجودة الطبيعية</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Story */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-primary-dark font-arabic">قصتنا</h2>
          </div>
          <p className="text-gray-600 leading-relaxed font-arabic">
            في زمنٍ غابت فيه المكونات الحقيقية، أطلقنا نُخبة لنكون جسركم الموثوق نحو الطبيعة البكر 
            وخيراتها الصافية. نُخبة ليست مجرد علامة تجارية، بل هي رسالة التزام بأجود المنتجات الطبيعية 
            المستخرجة من واحات سيوة ومطروح، ومن أفضل المزارع والمناحل في مصر.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 font-arabic">
            نؤمن بأن الطبيعة الأم تمنحنا أفضل ما لديها، ودورنا هو انتقاء هذه الخيرات وتقديمها لكم 
            بأعلى معايير الجودة والنقاء. كل منتج في نُخبة هو نتاج عناية فائقة واختيار دقيق.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Leaf, title: "طبيعي 100%", desc: "جميع منتجاتنا طبيعية تماماً، بدون مواد حافظة أو إضافات صناعية." },
            { icon: Award, title: "جودة فائقة", desc: "ننتقي بعناية أفضل المنتجات من أجود المصادر الطبيعية." },
            { icon: Heart, title: "حب واهتمام", desc: "نضع عميلنا في قلب اهتمامنا ونعمل على إسعاده بمنتجاتنا." },
            { icon: Users, title: "منتج محلي", desc: "ندعم المنتج المحلي المصري ونفخر بتقديم خيرات بلدنا." },
            { icon: Shield, title: "موثوقية", desc: "نضمن لكم منتجات أصلية ذات جودة عالية وخدمة متميزة." },
            { icon: Sparkles, title: "تميز", desc: "نتميز بتقديم منتجات فريدة لا تتوفر في كل مكان." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-primary-dark mb-2 font-arabic">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-arabic">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-2 font-arabic">انضم إلى عائلة نُخبة</h2>
          <p className="text-white/80 mb-4 font-arabic">جرب الفرق مع منتجاتنا الطبيعية الأصيلة</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-gold text-primary-dark px-6 py-3 rounded-xl font-bold hover:bg-gold-light transition-colors font-arabic">
            تسوق الآن
          </Link>
        </div>
      </div>
    </div>
  );
}