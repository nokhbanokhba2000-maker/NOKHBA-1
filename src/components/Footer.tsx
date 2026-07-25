import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, MessageCircle, Hash } from "lucide-react";
import { siteConfig } from "../data/site";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-primary-dark font-bold text-lg">ن</div>
              <div><h3 className="text-lg font-bold font-arabic">{siteConfig.name}</h3></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-arabic">{siteConfig.tagline}</p>
            <p className="text-white/50 text-xs mt-2 font-arabic">خيرات سيوة ومطروح و زيت الزيتون</p>
            <div className="flex gap-3 mt-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors text-sm" title="فيسبوك">📘</a>
              <a href={siteConfig.whatsappChannel} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors" title="قناة واتساب"><Hash className="w-4 h-4" /></a>
              <a href={`https://wa.me/2${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors" title="واتساب"><MessageCircle className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 font-arabic">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">الرئيسية</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">المنتجات</Link></li>
              <li><Link to="/checkout" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">سلة التسوق</Link></li>
              <li><Link to="/testimonials" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">آراء العملاء</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">تواصل معنا</Link></li>
              <li><Link to="/shipping" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">سياسة الشحن</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">سياسة الخصوصية</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-bold mb-4 font-arabic">الأقسام</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=olive-oil" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">🫒 زيت زيتون</Link></li>
              <li><Link to="/products?category=natural-oils" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">🫗 زيوت طبيعية</Link></li>
              <li><Link to="/products?category=hair-oils" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">💎 زيوت الشعر</Link></li>
              <li><Link to="/products?category=honey" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">🍯 عسل نحل</Link></li>
              <li><Link to="/products?category=dates" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">🌴 تمر</Link></li>
              <li><Link to="/products?category=spices" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">🌶️ بهارات وتوابل</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4 font-arabic">معلومات التواصل</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm"><Phone className="w-4 h-4 text-gold shrink-0" /><span dir="ltr" className="font-arabic">{siteConfig.phone}</span></li>
              <li className="flex items-center gap-2 text-white/70 text-sm"><MessageCircle className="w-4 h-4 text-gold shrink-0" /><span className="font-arabic">{siteConfig.whatsappNumber}</span></li>
              <li className="flex items-center gap-2 text-white/70 text-sm"><Mail className="w-4 h-4 text-gold shrink-0" /><span className="font-arabic">{siteConfig.email}</span></li>
              <li className="flex items-center gap-2 text-white/70 text-sm"><MapPin className="w-4 h-4 text-gold shrink-0" /><span className="font-arabic">{siteConfig.address}</span></li>
            </ul>
            <div className="mt-4 space-y-2">
              <a href={siteConfig.whatsappChannel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600/80 hover:bg-green-600 transition-colors rounded-lg px-4 py-2 text-xs text-white font-arabic w-full"><Hash className="w-4 h-4"/><span>قناة واتساب الرسمية</span></a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 transition-colors rounded-lg px-4 py-2 text-xs text-white font-arabic w-full">📘 تابعنا على فيسبوك</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/50 text-xs font-arabic">© {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
