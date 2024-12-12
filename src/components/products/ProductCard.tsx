
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <Link to={`/produit/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <ShoppingBag className="h-5 w-5 text-gray-900" />
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          <p className="text-lg font-medium mt-2">{product.price}€</p>
        </div>
      </Link>
    </div>
  );
}
