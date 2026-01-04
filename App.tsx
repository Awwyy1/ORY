
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Philosophy from './components/Philosophy';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
import InfoPage from './components/InfoPage';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<string | null>(null);

  const navigateTo = (page: string | null) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#0F0F0F]">
        <Header onMenuOpen={() => setIsMenuOpen(true)} onHome={() => navigateTo(null)} />
        
        <main>
          {activePage ? (
            <InfoPage pageId={activePage} onClose={() => navigateTo(null)} />
          ) : (
            <>
              <Hero />
              <Philosophy />
              <ProductGrid />
            </>
          )}
        </main>

        <Footer onNavigate={navigateTo} />
        
        <SideMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onNavigate={navigateTo} 
        />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;
