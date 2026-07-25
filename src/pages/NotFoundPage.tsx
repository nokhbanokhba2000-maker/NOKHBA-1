import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl mb-4">🌿</div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-2 font-arabic">404</h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 font-arabic">الصفحة غير موجودة</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto font-arabic">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تصفح منتجاتنا الطبيعية واكتشف عالم نُخبة.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-light transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="font-arabic">الرئيسية</span>
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="font-arabic">تصفح المنتجات</span>
          </Link>
        </div>
      </div>
    </div>
  );
}