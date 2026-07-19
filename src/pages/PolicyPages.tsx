import { Truck, Shield, Clock, RotateCcw } from "lucide-react";

export function ShippingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-arabic">سياسة الشحن والتوصيل</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6">
          <div className="flex items-start gap-4">
            <Truck className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">مدة التوصيل</h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                يتم توصيل الطلبات داخل جمهورية مصر العربية خلال 3-7 أيام عمل من تاريخ تأكيد الطلب. 
                للطلبات خارج مصر، تختلف مدة التوصيل حسب الوجهة ويتم إعلام العميل بالمدة المتوقعة.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">رسوم الشحن</h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                الشحن مجاني للطلبات التي تتجاوز قيمتها 500 ج.م داخل مصر. للطلبات الأقل من 500 ج.م، 
                رسوم الشحن 35 ج.م. للطلبات خارج مصر، يتم حساب رسوم الشحن حسب الوجهة والوزن.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">أوقات التوصيل</h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                يتم التوصيل من الأحد إلى الخميس من الساعة 9 صباحاً حتى 9 مساءً. 
                لا يوجد توصيل في أيام الجمعة والسبت والعطلات الرسمية.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <RotateCcw className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">تتبع الطلب</h3>
              <p className="text-gray-600 leading-relaxed font-arabic">
                بعد تأكيد الطلب، سيتم إرسال رقم تتبع للطلب يمكنك من متابعة حالة الشحن 
                خطوة بخطوة حتى وصوله إليك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReturnsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-arabic">سياسة الاسترجاع والاستبدال</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">سياسة الاسترجاع</h3>
            <p className="text-gray-600 leading-relaxed font-arabic">
              يمكنك إرجاع المنتجات خلال 14 يوماً من تاريخ الاستلام بشرط أن تكون المنتجات في حالتها الأصلية 
              وغير مفتوحة أو مستخدمة. يتم استرداد المبلغ كاملاً خلال 7-14 يوم عمل من استلامنا للمنتج.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">سياسة الاستبدال</h3>
            <p className="text-gray-600 leading-relaxed font-arabic">
              في حالة استلام منتج تالف أو خطأ في الطلب، يرجى التواصل معنا خلال 48 ساعة من الاستلام 
              وسيتم استبدال المنتج فوراً على نفقتنا.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">شروط الاسترجاع</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 font-arabic">
              <li>يجب أن تكون المنتجات في عبوتها الأصلية</li>
              <li>يجب ألا تكون المنتجات قد استخدمت أو فتحت</li>
              <li>يجب إرفاق فاتورة الشراء</li>
              <li>المنتجات الغذائية المفتوحة لا يمكن استرجاعها</li>
              <li>رسوم الشحن للاسترجاع يتحملها العميل إلا في حالة وجود عيب مصنعي</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-arabic">سياسة الخصوصية</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">معلومات العميل</h3>
            <p className="text-gray-600 leading-relaxed font-arabic">
              نحن في نُخبة نلتزم بحماية خصوصية عملائنا. المعلومات التي نجمعها (الاسم، رقم الهاتف، 
              البريد الإلكتروني، العنوان) تستخدم فقط لتأكيد الطلبات وتوصيلها وتحسين خدماتنا.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">حماية المعلومات</h3>
            <p className="text-gray-600 leading-relaxed font-arabic">
              نستخدم أحدث تقنيات التشفير لحماية معلوماتكم الشخصية. لا نقوم بمشاركة معلومات العملاء 
              مع أي جهة خارجية بدون موافقة صريحة من العميل.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 font-arabic">التواصل التسويقي</h3>
            <p className="text-gray-600 leading-relaxed font-arabic">
              يمكن للعميل إلغاء الاشتراك في الرسائل التسويقية في أي وقت من خلال الضغط على 
              رابط إلغاء الاشتراك الموجود في أسفل أي رسالة بريد إلكتروني.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}