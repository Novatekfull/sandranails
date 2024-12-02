import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const collectionTitles = {
  jour: 'Collection Jour',
  nuit: 'Collection Nuit',
  evenement: 'Collection Événements'
};

export default function Collection() {
  const { category } = useParams<{ category: 'jour' | 'nuit' | 'evenement' }>();
  const collectionProducts = products.filter(product => product.category === category);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-serif text-center mb-12">
          {collectionTitles[category!]}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}