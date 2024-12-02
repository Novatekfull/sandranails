import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Collection Jour',
    path: '/collection/jour',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
    description: 'Des créations élégantes pour sublimer votre quotidien'
  },
  {
    title: 'Collection Nuit',
    path: '/collection/nuit',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53',
    description: 'Des designs audacieux pour vos soirées exceptionnelles'
  },
  {
    title: 'Collection Événement',
    path: '/collection/evenement',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa4576f',
    description: 'Des créations uniques pour vos moments inoubliables'
  }
];

export default function CollectionsMenu() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-serif text-center mb-12">Nos Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.path}
              to={collection.path}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-medium mb-2">{collection.title}</h3>
                  <p className="text-sm opacity-90">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}