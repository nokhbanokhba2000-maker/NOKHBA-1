import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Check, ChevronRight, Truck, CreditCard, Landmark, Banknote, Upload, MessageCircle, Package, MapPin, Phone, User, FileText } from "lucide-react";
import { siteConfig } from "../data/site";
import type { CartItem } from "../data/site";

const governorates = [
  "القاهرة", "الإسكندرية", "الجيزة", "بورسعيد", "السويس", "دمياط",
  "كفر الشيخ", "المنصورة", "طنطا", "مطروح", "سيوة", "أسوان", "أسيوط",
  "بنى سويف", "الفيوم", "الأقصر", "الإسماعيلية", "المنيا", "الدقهلية",
  "الشرقية", "الغربية", "البحيرة", "البحر الأحمر", "جنوب سيناء",
  "شمال سيناء", "قنا", "سوهاج", "الوادي الجديد"
];

interface CheckoutPageProps {
  cartItems: CartItem[];
  cartCount: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  updateQuantity: (productId: string, delta: number) => void;
  removeFromCart: (productId: string) => void;
}

const categoryIcons: Record<string, string> = {
  "olive-oil": "🫒", "offers": "🏷️", "hair-oils": "💎", "cosmetics": "💄",
  "soap": "🧼", "natural-oils": "🫗", "dates": "🌴", "spices": "🌶️",
  "honey": "🍯", "tea-coffee": "🫖", "olives": "🫒", "nuts": "🥜",
  "henna": "🌿", "herbal": "🌿", "aromatic-oils": "🌸", "our-products": "⭐",
};

export function CheckoutPage({ cartItems, cartCount, cartOpen, setCartOpen, updateQuantity, removeFromCart }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    governorate: "",
    region: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<"manual" | "electronic" | "">("");
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = formData.governorate ? (formData.governorate === "مطروح" || formData.governorate === "سيوة" ? 80 : 50) : 0;
  const grandTotal = subtotal + deliveryFee;

  const isFormValid = formData.fullName.trim() && formData.phone.trim() && formData.governorate && formData.region.trim() && formData.address.trim() && paymentMethod;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
    setShowSuccess(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const whatsappOrderMessage = cartItems.length > 0
    ? encodeURIComponent(
        `طلب جديد من ${formData.fullName}\nرقم الهاتف: ${formData.phone}\nالمحافظة: ${formData.governorate}\nالمنطقة: ${formData.region}\nالعنوان: ${formData.address}\n\nالمنتجات:\n${
          cartItems.map(i => `${i.product.name} × ${i.quantity} = ${i.product.price * i.quantity} ج.م`).join("\n")
        }\n\nالمجموع: ${subtotal} ج.م\nالتوصيل: ${deliveryFee} ج.م\nالإجمالي: ${grandTotal} ج.م\nطريقة الدفع: ${paymentMethod === "manual" ? "تحويل بنكي" : "دفع إلكتروني"}`
      )
    : "";

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 text-center animate-[fadeIn_0.5s_ease-out]">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 animate-[bounceIn_0.6s_ease-out]">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-primary-dark mb-3 font-arabic">شكرًا لك! تم تأكيد طلبك بنجاح 🎉</h2>
          <p className="text-gray-600 mb-6 font-arabic">سيتم التواصل معك قريبًا عبر واتساب لتأكيد الطلب وتفاصيل التوصيل.</p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-right space-y-1 text-sm">
            <p className="font-arabic"><span className="font-bold">الاسم:</span> {formData.fullName}</p>
            <p className="font-arabic"><span className="font-bold">رقم الهاتف:</span> {formData.phone}</p>
            <p className="font-arabic"><span className="font-bold">المحافظة:</span> {formData.governorate}</p>
            <p className="font-arabic"><span className="font-bold">المنطقة:</span> {formData.region}</p>
            <p className="font-arabic"><span className="font-bold">الإجمالي:</span> {grandTotal} ج.م</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/" className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-light transition-colors font-arabic">
              🏠 العودة للمتجر
            </Link>
            {whatsappOrderMessage && (
              <a
                href={`https://wa.me/201023696962?text=${whatsappOrderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors font-arabic"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا عبر واتساب بشأن هذا الطلب
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      {/* Hero Bar */}
      <div className="bg-gradient-to-l from-primary via-primary-dark to-primary py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAwIDEgMjAgMjAgMjAgMjAgMCAwIDEtMjAgMjAgMjAgMjAgMCAwIDEtMjAtMjAgMjAgMjAgMCAwIDEgMjAtMjB6IiBmaWxsPSIjYzlhODRjIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz48L3N2Zz4=')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link to="/" className="hover:text-gold transition-colors font-arabic">الرئيسية</Link>
            <ChevronRight className="w-3 h-3 rtl-flip" />
            <Link to="/products" className="hover:text-gold transition-colors font-arabic">المنتجات</Link>
            <ChevronRight className="w-3 h-3 rtl-flip" />
            <button onClick={() => setCartOpen(true)} className="hover:text-gold transition-colors font-arabic">سلة التسوق</button>
            <ChevronRight className="w-3 h-3 rtl-flip" />
            <span className="text-gold font-arabic">إتمام الطلب</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white font-arabic">🛒 إتمام الطلب</h1>
          <p className="text-white/70 mt-1 text-sm font-arabic">أكمل بياناتك لتأكيد طلبك من نُخبة</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Form - 2/3 */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Details */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary-dark font-arabic">بيانات الشحن</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 font-arabic">الاسم الكامل *</label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="الاسم الكامل"
                        className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-arabic text-right"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 font-arabic">رقم الهاتف *</label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="رقم الهاتف للتواصل"
                        className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-arabic text-right"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 font-arabic">المحافظة *</label>
                    <div className="relative">
                      <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.governorate}
                        onChange={(e) => handleInputChange("governorate", e.target.value)}
                        className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-arabic appearance-none bg-white"
                        required
                      >
                        <option value="">اختر المحافظة</option>
                        {governorates.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 font-arabic">المدينة / المنطقة *</label>
                    <div className="relative">
                      <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={formData.region}
                        onChange={(e) => handleInputChange("region", e.target.value)}
                        placeholder="المدينة أو المنطقة"
                        className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-arabic text-right"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 font-arabic">العنوان التفصيلي *</label>
                    <div className="relative">
                      <FileText className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="العنوان بالتفاصيل... شارع – مبنى – طابق"
                        rows={3}
                        className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-arabic text-right resize-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary-dark font-arabic">طريقة الدفع</h2>
                </div>

                <div className="space-y-4">
                  {/* Manual Payment */}
                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "manual" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="manual"
                        checked={paymentMethod === "manual"}
                        onChange={() => setPaymentMethod("manual")}
                        className="w-5 h-5 text-primary"
                      />
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-primary" />
                        <span className="font-bold text-gray-800 font-arabic">الدفع عند الاستلام / تحويل بنكي</span>
                      </div>
                    </div>
                    {paymentMethod === "manual" && (
                      <div className="mt-4 pr-8 space-y-3 animate-[fadeIn_0.3s_ease-out]">
                        <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                          <p className="font-bold text-primary-dark font-arabic">📋 بيانات التحويل البنكي:</p>
                          <p className="text-gray-600 font-arabic">بنك مصر (Banque Misr)</p>
                          <p className="text-gray-600 font-arabic">رقم الحساب: <span dir="ltr" className="font-bold">**** 1234</span></p>
                          <p className="text-gray-600 font-arabic">محفظة إنستاباي: <span dir="ltr" className="font-bold">01023696962</span></p>
                          <p className="text-gray-600 font-arabic text-xs">الاسم: نُخبة للمنتجات الطبيعية</p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1.5 font-arabic">اسم المستلم للحوالة</label>
                          <input
                            type="text"
                            placeholder="اسم المحول"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-arabic text-right"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1.5 font-arabic">تحميل إيصال التحويل</label>
                          <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:border-primary/50 hover:bg-gray-50 transition-all"
                          >
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*,.pdf"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            {receiptFile ? (
                              <div className="flex items-center justify-center gap-2 text-green-600">
                                <Check className="w-5 h-5" />
                                <span className="font-arabic text-sm">{receiptFile.name}</span>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-1">
                                <Upload className="w-6 h-6 text-gray-400" />
                                <span className="text-sm text-gray-500 font-arabic">اضغط لرفع الإيصال</span>
                                <span className="text-xs text-gray-400 font-arabic">صورة أو PDF</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </label>

                  {/* Electronic Payment */}
                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "electronic" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="electronic"
                        checked={paymentMethod === "electronic"}
                        onChange={() => setPaymentMethod("electronic")}
                        className="w-5 h-5 text-primary"
                      />
                      <div className="flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-primary" />
                        <span className="font-bold text-gray-800 font-arabic">الدفع الإلكتروني</span>
                      </div>
                    </div>
                    {paymentMethod === "electronic" && (
                      <div className="mt-4 pr-8 space-y-3 animate-[fadeIn_0.3s_ease-out]">
                        <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                          <p className="font-bold text-primary-dark font-arabic">📱 وسائل الدفع الإلكتروني المتاحة:</p>
                          <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-lg">💳</span>
                            <span className="font-arabic">فوري (Fawry)</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-lg">📱</span>
                            <span className="font-arabic">اتصالات كاش (Etisalat Cash)</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-lg">🟠</span>
                            <span className="font-arabic">أورانج موني (Orange Money)</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-2 font-arabic">سيتم إرسال رابط الدفع عبر واتساب بعد تأكيد الطلب</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-gray-700 font-arabic">المبلغ المطلوب:</span>
                          <span className="text-lg font-bold text-primary">{grandTotal} ج.م</span>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg ${
                  isFormValid
                    ? "bg-primary text-white hover:bg-primary-light shadow-primary/20"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="font-arabic">تأكيد الطلب 🛒</span>
              </button>
            </div>

            {/* Sidebar - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary-dark font-arabic">ملخص السلة</h2>
                </div>

                {/* Cart Items */}
                <div className="space-y-3 mb-4">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm font-arabic">سلتك فارغة</p>
                      <Link to="/products" className="text-primary text-sm font-bold mt-2 inline-block font-arabic">تسوق الآن</Link>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.product.id} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center shrink-0">
                          <span className="text-lg">{categoryIcons[item.product.category] || "🌿"}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-800 font-arabic truncate">{item.product.name}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-500 font-arabic">× {item.quantity}</span>
                            <span className="text-xs font-bold text-primary">{item.product.price * item.quantity} ج.م</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-arabic">المجموع الفرعي</span>
                    <span className="font-bold">{subtotal} ج.م</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-arabic">تكلفة التوصيل</span>
                    <span className="font-bold">{deliveryFee > 0 ? `${deliveryFee} ج.م` : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between text-base pt-2 border-t border-gray-100">
                    <span className="font-bold text-primary-dark font-arabic">الإجمالي الكلي</span>
                    <span className="text-xl font-bold text-primary">{grandTotal} ج.م</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 font-arabic leading-relaxed">
                    * يتم حساب تكلفة التوصيل النهائية بواسطة مندوب مبيعاتنا خلال ساعة من استلام طلبك
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}