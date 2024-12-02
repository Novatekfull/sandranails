import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              Aurum incarne l'excellence du nail art de luxe, où chaque création est une œuvre d'art unique.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-amber-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="hover:text-amber-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-amber-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@aurum.com" className="hover:text-amber-500">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collection/jour" className="hover:text-amber-500">Collection Jour</Link>
              </li>
              <li>
                <Link to="/collection/nuit" className="hover:text-amber-500">Collection Nuit</Link>
              </li>
              <li>
                <Link to="/collection/evenement" className="hover:text-amber-500">Collection Événement</Link>
              </li>
              <li>
                <Link to="/sur-mesure" className="hover:text-amber-500">Sur Mesure</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Service Client</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/livraison" className="hover:text-amber-500">Livraison</Link>
              </li>
              <li>
                <Link to="/retours" className="hover:text-amber-500">Retours & Échanges</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-500">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Inscrivez-vous pour recevoir nos dernières créations et offres exclusives.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-amber-500 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="w-full bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Aurum. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}