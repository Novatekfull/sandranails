import { useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo et bouton hamburger */}
          <div className="flex items-center">
            <button
              className="p-2 lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            <Logo />
          </div>

          {/* Navigation principale */}
          <nav
            className={`${
              isMenuOpen
                ? "fixed inset-0 h-60 bg-white flex flex-col items-center justify-center z-40 lg:static lg:flex-row"
                : "hidden lg:flex"
            } space-y-6 lg:space-y-0 lg:space-x-8`}
          >
            {isMenuOpen && (
              <button
                className="absolute top-4 right-4 p-2 lg:hidden"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            )}
            <Link
              to="/collection/jour"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection Jour
            </Link>
            <Link
              to="/collection/nuit"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection Nuit
            </Link>
            <Link
              to="/collection/evenement"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Événements
            </Link>
            <Link
              to="/sur-mesure"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sur Mesure
            </Link>
          </nav>

          {/* Actions à droite */}
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <Link to="/panier" className="p-2 relative">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
