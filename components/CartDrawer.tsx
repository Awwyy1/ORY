
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [paySlider, setPaySlider] = useState(0);

  const handleSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setPaySlider(val);
    if (val === 100) {
      alert("Order processed. Welcome to the elite.");
      setPaySlider(0);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 titanium-border border-l z-50 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="brand-font text-xl text-white">Your Armor</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 pr-2">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <p className="text-slate-500 brand-font text-xs uppercase tracking-widest">The armory is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-sky-400 brand-font text-[10px] underline underline-offset-4"
                  >
                    Go choose your gear
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={`${item.id}-${item.selectedSize}`} 
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-24 bg-zinc-900 overflow-hidden flex-shrink-0">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="brand-font text-[10px] text-white tracking-widest">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id, item.selectedSize)}>
                            <X className="w-3 h-3 text-slate-600 hover:text-red-500" />
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase mt-1">Size: {item.selectedSize}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 bg-zinc-900/50 p-1 px-3 border border-white/5">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, -1)}>
                            <Minus className="w-3 h-3 text-slate-400" />
                          </button>
                          <span className="text-xs font-mono">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, 1)}>
                            <Plus className="w-3 h-3 text-slate-400" />
                          </button>
                        </div>
                        <p className="brand-font text-sky-400 text-xs">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-8 pt-8 border-t border-white/5 space-y-8">
                <div className="flex justify-between items-center">
                  <span className="brand-font text-xs text-slate-400">Total Investment</span>
                  <span className="brand-font text-xl text-white">${totalPrice}</span>
                </div>

                <div className="relative h-14 bg-zinc-900 rounded-full flex items-center p-1 border border-white/5 overflow-hidden">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={paySlider}
                    onChange={handleSlide}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <motion.div 
                    style={{ x: `${paySlider * 0.82}%` }}
                    className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="brand-font text-[10px] tracking-[0.2em] text-slate-400">
                      {paySlider > 5 ? '' : 'Slide to Secure Armor'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
