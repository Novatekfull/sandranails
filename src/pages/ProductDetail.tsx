import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, ShoppingBag, Truck, Shield, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';

const reviews = [
  { id: 1, author: "Sophie L.", rating: 5, comment: "Absolument magnifique ! La qualité est exceptionnelle.", date: "2024-02-15" },
  { id: 2, author: "Marie D.", rating: 5, comment: "Un travail d'une finesse incroyable, je suis conquise.", date: "2024-02-10" },
  { id: 3, author: "Claire F.", rating: 4, comment: "Superbe réalisation, petit bémol sur la durée de livraison.", date: "2024-02-05" }
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const addItem = useCartStore(state => state.addItem);
  const [activeTab, setActiveTab] = useState<'description' | 'livraison' | 'avis'>('description');

  if (!product) {
    return <div className="pt-24 text-center">Produit non trouvé</div>;
  }

  const handleAddToCart = () => {
    addItem(product);
    navigate('/panier');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 space-x-2">
              <button className="bg-white/90 p-2 rounded-full shadow hover:bg-white">
                <Heart className="h-5 w-5" />
              </button>
              <button className="bg-white/90 p-2 rounded-full shadow hover:bg-white">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
              <p className="text-2xl font-light">{product.price}€</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-4 ${
                    activeTab === "description"
                      ? "border-b-2 border-amber-500 text-amber-500"
                      : "text-gray-500"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("livraison")}
                  className={`pb-4 ${
                    activeTab === "livraison"
                      ? "border-b-2 border-amber-500 text-amber-500"
                      : "text-gray-500"
                  }`}
                >
                  Livraison
                </button>
                <button
                  onClick={() => setActiveTab("avis")}
                  className={`pb-4 ${
                    activeTab === "avis"
                      ? "border-b-2 border-amber-500 text-amber-500"
                      : "text-gray-500"
                  }`}
                >
                  Avis Clients
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === "description" && (
                <>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Matériaux Précieux</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Or 24 carats</li>
                      <li>Cristaux Swarovski</li>
                      <li>Nacre naturelle</li>
                    </ul>
                  </div>
                </>
              )}

              {activeTab === "livraison" && (
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Truck className="h-6 w-6 text-amber-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Livraison Express</h3>
                      <p className="text-gray-600">
                        Livraison sous 24-48h en France métropolitaine
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-amber-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Garantie Qualité</h3>
                      <p className="text-gray-600">
                        Garantie satisfaction 30 jours
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "avis" && (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.author}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-amber-500 fill-current"
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-amber-500 text-white px-6 py-4 rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Ajouter au Panier</span>
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-medium mb-4">Moyens de Paiement Acceptés</h3>
              <div className="grid grid-cols-4 gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="h-8 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt="Mastercard"
                  className="h-8 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                  alt="PayPal"
                  className="h-8 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/512px-Apple_Pay_logo.svg.png"
                  alt="Apple Pay"
                  className="h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
