import React from 'react';

export default function SurMesure() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-serif text-center mb-8">Sur Mesure</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-8">
            Découvrez notre service de création sur mesure, où chaque design est unique et personnalisé selon vos désirs.
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Votre Vision</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="Décrivez votre design idéal..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Style Préféré</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500">
                <option>Minimaliste</option>
                <option>Glamour</option>
                <option>Artistique</option>
                <option>Avant-garde</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors"
            >
              Demander un Devis
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}