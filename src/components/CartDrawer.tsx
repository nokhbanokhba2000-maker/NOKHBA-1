import { X, Minus, Plus, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CartItem, siteConfig } from "../data/site";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemove: (productId: string) => void;
}

const categoryIcons: Record<string, string> = {
  "olive-oil": "🫒", "offers": "🏷️", "hair-oils": "💎", "cosmetics": "💄",
  "soap": "🧼", "natural-oils": "🫗", "dates": "🌴", "spices": "🌶️",
  "honey": "🍯", "tea-coffee": "🫖", "olives": "🫒", "nuts": "🥜",
  "henna": "🌿", "herbal": "🌿", "aromatic-oils": "🌸", "our-products": "⭐",
};

export function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-primary font-arabic">سلة التسوق</h2>
              {items.length > 0 && (
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              )}
            </div>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Continue Shopping Link */}
          <div className="px-4 pt-3">
            <button
              onClick={onClose}
              className="text-primary text-xs font-bold hover:underline flex items-center gap-1 font-arabic"
            >
              <ArrowLeft className="w-3 h-3 rtl-flip" />
              اضغط هنا للمتابعة في المتجر
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingCart className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg font-arabic">سلتك فارغة</p>
                <p className="text-sm mt-1 font-arabic">أضف منتجاتك المفضلة هنا</p>
                <Link
                  to="/products"
                  onClick={onClose}
                  className="mt-4 px-6 py-2 rounded-xl bg-primary text-white text-sm font-bold font-arabic"
                >
                  تسوق الآن
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-2xl">{categoryIcons[item.product.category] || "🌿"}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-gray-800 font-arabic">{item.product.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5 font-arabic">{item.product.weight}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-bold text-primary">{item.product.price} ج.م</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemove(item.product.id)}
                      className="self-start p-1 text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-arabic">المجموع</span>
                <span className="text-lg font-bold text-primary">{total} ج.م</span>
              </div>
              <Link
                to="/checkout"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-light transition-colors font-arabic"
              >
                <ShoppingCart className="w-5 h-5" />
                🛒 إتمام الشراء
              </Link>
              <p className="text-center text-xs text-gray-400 font-arabic">
                الشحن سيتم حسابه عند الدفع
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}