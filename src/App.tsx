import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Collections from './pages/Collections';
import SurMesure from './pages/SurMesure';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col t-10">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collection/:category" element={<Collection />} />
            <Route path="/sur-mesure" element={<SurMesure />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/paiement" element={<Payment />} />
            <Route path="/produit/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
