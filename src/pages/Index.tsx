import { useState } from "react";
import { MagicalHeader } from "@/components/MagicalHeader";
import { ProductCard } from "@/components/ProductCard";
import { WishlistSection } from "@/components/WishlistSection";
import { ShoppingCart, type CartItem } from "@/components/ShoppingCart";
import { uselessProducts } from "@/data/products";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        emoji: product.emoji, 
        quantity: 1 
      }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prev.filter(item => item.id !== productId);
    });
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="min-h-screen">
      <MagicalHeader />
      
      <ShoppingCart 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
      
      {/* Main magical shopping area */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero section - NO ANIMATIONS */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-neon-purple rounded-full"></div>
          <div className="absolute top-10 right-1/3 w-3 h-3 bg-slime-green rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-glowing-pink rounded-full"></div>
          
          <h2 className="text-cosmic text-3xl md:text-4xl font-bold mb-4">
            ✨ UNLIMITED USELESS PRODUCTS ✨
          </h2>
          <p className="text-glowing-pink text-lg mb-6 font-kalam">
            Curated by our team of professional disappointment specialists
          </p>
          
          <div className="text-neon-purple text-sm mb-8 font-pixel">
            🌟 WARNING: THESE ITEMS MAY CAUSE SPONTANEOUS CONFUSION 🌟
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {uselessProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        {/* Wishlist section */}
        <div className="max-w-2xl mx-auto mb-12">
          <WishlistSection />
        </div>

        {/* Footer chaos */}
        <footer className="text-center space-y-4 py-8 border-t-2 border-neon-purple/30">
          <div className="text-cosmic text-xl font-bold">
            🎭 STILL NOT CONFUSED ENOUGH? 🎭
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="text-slime-green font-pixel">ABOUT OUR USELESSNESS</span>
            <span className="text-neon-purple font-pixel">CUSTOMER CONFUSION</span>
            <span className="text-glowing-pink font-pixel">RETURN POLICY (LOL)</span>
            <span className="text-mystical-orange font-pixel">TERMS OF BEWILDERMENT</span>
          </div>

          <div className="text-muted-foreground text-xs space-y-2">
            <p>© 2024 WONDERLESS EMPORIUM</p>
            <p className="italic">
              "WE GUARANTEE 100% POINTLESSNESS OR YOUR CONFUSION BACK!"
            </p>
            <p className="text-neon-purple text-xs font-pixel">
              ⚡ UNLIMITED USELESS PRODUCTS SINCE NEVER ⚡
            </p>
          </div>

          {/* Static footer particles */}
          <div className="relative overflow-hidden h-16">
            <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-neon-purple rounded-full"></div>
            <div className="absolute bottom-5 right-1/4 w-2 h-2 bg-slime-green rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-glowing-pink rounded-full"></div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
