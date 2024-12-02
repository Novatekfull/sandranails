import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <Link to="/collection/jour" className="text-gray-600 hover:text-gray-900 transition-colors">
        Collection Jour
      </Link>
      <Link to="/collection/nuit" className="text-gray-600 hover:text-gray-900 transition-colors">
        Collection Nuit
      </Link>
      <Link to="/collection/evenement" className="text-gray-600 hover:text-gray-900 transition-colors">
        Événements
      </Link>
      <Link to="/sur-mesure" className="text-gray-600 hover:text-gray-900 transition-colors">
        Sur Mesure
      </Link>
    </nav>
  );
}
