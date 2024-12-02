import React from 'react';
import Hero from '../components/home/Hero';
import CollectionsMenu from '../components/home/CollectionsMenu';
import FeaturedProducts from '../components/home/FeaturedProducts';

export default function Home() {
  return (
    <div>
      <Hero />
      <CollectionsMenu />
      <FeaturedProducts />
    </div>
  );
}