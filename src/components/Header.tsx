import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Store, Search } from "lucide-react";
import { siteConfig } from "../data/site";

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
}

export function Header({ cartCount, onCartOpen }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              ن
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary leading-tight font-arabic">
                {siteConfig.name}
              </h1>
              <p className="text-[10px] text-gray-500 leading-tight font-arabic">
                منتجات طبيعية من القلب
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors font-arabic ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-400 hover:border-primary/30 hover:text-primary transition-colors text-sm">
              <Search className="w-4 h-4" />
              <span className="font-arabic">بحث</span>
            </button>

            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors font-arabic ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <button className="flex items-center gap-2 w-full px-4 py-3 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 text-sm font-arabic">
                <Search className="w-4 h-4" />
                بحث
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}