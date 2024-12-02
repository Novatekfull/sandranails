import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="assets/17.png"
          alt="Nail Art de Luxe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-serif leading-tight mb-6">
            L'Art de la Perfection
          </h1>
          <p className="text-xl mb-8">
            Découvrez notre  collection exclusive de nail art, où chaque détail est une œuvre d'art
          </p>
          <Link
            to="/collections"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Explorer la Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
