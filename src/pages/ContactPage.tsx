import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "../data/site";

export function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-arabic">تواصل معنا</h1>
          <p className="text-white/70 mt-2 font-arabic">نحن هنا لخدمتك على مدار الساعة</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary-dark mb-6 font-arabic">أرسل لنا رسالة</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-arabic">الاسم</label>
                <input
                  type="text"
                  placeholder="ادخل اسمك"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-right font-arabic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-arabic">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-right font-arabic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-arabic">رقم الهاتف</label>
                <input
                  type="tel"
                  placeholder="+20 10 1234 5678"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-right"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-arabic">الرسالة</label>
                <textarea
                  rows={4}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-right resize-none font-arabic"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
              >
                <Send className="w-4 h-4" />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-primary-dark mb-6 font-arabic">معلومات التواصل</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-arabic">رقم الهاتف</p>
                    <p className="text-sm font-bold text-gray-800" dir="ltr">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-arabic">البريد الإلكتروني</p>
                    <p className="text-sm font-bold text-gray-800">{siteConfig.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-arabic">العنوان</p>
                    <p className="text-sm font-bold text-gray-800 font-arabic">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 rounded-2xl p-6 text-white hover:bg-green-600 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-bold font-arabic">تواصل عبر واتساب</h3>
                  <p className="text-white/80 text-sm font-arabic">رد فوري على استفساراتك</p>
                </div>
              </div>
            </a>

            {/* Social Media */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary-dark mb-4 font-arabic">تابعنا على</h3>
              <div className="flex gap-3">
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-medium text-sm">
                  فيسبوك
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors font-medium text-sm">
                  انستجرام
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors font-medium text-sm">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}