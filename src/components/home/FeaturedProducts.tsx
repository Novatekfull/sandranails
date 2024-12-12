
import ProductCard from '../products/ProductCard';
import { Product } from '../../types';

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "L'Or Royal",
    description: "Nail art en or 24 carats avec incrustation de diamants",
    price: 299,
    image: "/assets/8.png",
    category: "luxe",
  },
  {
    id: 2,
    name: "Nuit Étoilée",
    description: "Design exclusif avec poudre de nacre et cristaux Swarovski",
    price: 249,
    image: "/assets/4.png",
    category: "nuit",
  },
  {
    id: 3,
    name: "Rose Éternelle",
    description: "Motifs floraux délicats avec feuilles d'or rose",
    price: 199,
    image: "/assets/7.png",
    category: "jour",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-serif text-center mb-12">Nos Créations Exclusives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
