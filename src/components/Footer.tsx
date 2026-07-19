import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Globe, Camera, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/site";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-primary-dark font-bold text-lg">
                ن
              </div>
              <div>
                <h3 className="text-lg font-bold font-arabic">{siteConfig.name}</h3>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-arabic">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3 mt-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors">
                <Camera className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 font-arabic">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">الرئيسية</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">المنتجات</Link></li>
              <li><Link to="/testimonials" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">آراء العملاء</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-base font-bold mb-4 font-arabic">السياسات</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">سياسة الشحن والتوصيل</Link></li>
              <li><Link to="/returns" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">سياسة الاسترجاع والاستبدال</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-gold transition-colors text-sm font-arabic">سياسة الخصوصية</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4 font-arabic">معلومات التواصل</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span dir="ltr" className="font-arabic">{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="font-arabic">{siteConfig.email}</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span className="font-arabic">{siteConfig.address}</span>
              </li>
            </ul>
            {/* App badge */}
            <div className="mt-4">
              <a href="#" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-xs text-white/80 font-arabic">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h9.5v20H4.5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M14 2h5.5c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5H14V2z"/></svg>
                <span>حمّل تطبيق نُخبة</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/50 text-xs font-arabic">
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}