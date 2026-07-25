import { Link } from "react-router-dom";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../data/site";

const faqs = [
  {
    q: "هل منتجات نُخبة طبيعية 100%؟",
    a: "نعم، جميع منتجاتنا طبيعية 100% وخالية من المواد الحافظة والإضافات الصناعية. نضمن لكم منتجات أصيلة من مصادرها الطبيعية."
  },
  {
    q: "ما هي طرق الدفع المتاحة؟",
    a: "نوفر خيارات دفع مرنة: الدفع عند الاستلام (كاش) لجميع محافظات مصر، بالإضافة إلى التحويل البنكي والحوالات."
  },
  {
    q: "كم تستغرق مدة التوصيل؟",
    a: "يتم توصيل الطلبات داخل مصر خلال 3-7 أيام عمل من تاريخ تأكيد الطلب. نوصل لجميع المحافظات."
  },
  {
    q: "هل يوجد شحن مجاني؟",
    a: "نعم، الشحن مجاني للطلبات التي تتجاوز قيمتها 500 ج.م داخل مصر."
  },
  {
    q: "كيف يمكنني الطلب عبر واتساب؟",
    a: "يمكنك التواصل معنا مباشرة عبر زر واتساب الموجود في جميع صفحات الموقع، أو عبر الرقم: {phone}".replace("{phone}", siteConfig.phone)
  },
  {
    q: "هل يمكن استرجاع المنتج؟",
    a: "يمكنك إرجاع المنتجات خلال 14 يوماً من تاريخ الاستلام بشرط أن تكون في حالتها الأصلية غير مستخدمة."
  },
  {
    q: "هل منتجاتكم مناسبة لجميع أنواع البشرة؟",
    a: "معظم منتجاتنا مناسبة لجميع أنواع البشرة، لكن ننصح بقراءة التعليمات والتحذيرات لكل منتج قبل الاستخدام."
  },
  {
    q: "كيف يمكنني تتبع طلبي؟",
    a: "بعد تأكيد الطلب، سيتم إرسال رقم تتبع يمكنك من متابعة حالة الشحن خطوة بخطوة."
  },
  {
    q: "هل توفرون منتجات بالجملة؟",
    a: "نعم، نوفر عروض خاصة للشراء بالجملة. للاستفسار يمكنكم التواصل معنا عبر واتساب."
  },
  {
    q: "ما هي أوقات العمل لخدمة العملاء؟",
    a: "فريق خدمة العملاء متاح يومياً من 9 صباحاً حتى 10 مساءً عبر واتساب والاتصال الهاتفي."
  }
];

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-arabic">الأسئلة الشائعة</h1>
          <p className="text-white/70 mt-2 font-arabic">إجابات على أكثر الأسئلة شيوعاً</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-right"
              >
                <span className="text-sm md:text-base font-bold text-primary-dark font-arabic">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0 mr-3" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mr-3" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed font-arabic">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-green-50 rounded-2xl border border-green-100 p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-bold text-green-800 font-arabic">لم تجد إجابتك؟</h3>
          </div>
          <p className="text-sm text-green-700 mb-4 font-arabic">تواصل معنا مباشرة عبر واتساب وسنرد عليك فوراً</p>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            تواصل عبر واتساب
          </a>
        </div>
      </div>
    </div>
  );
}