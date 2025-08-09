import { MagicalHeader } from "@/components/MagicalHeader";
import { ProductCard } from "@/components/ProductCard";
import { WishlistSection } from "@/components/WishlistSection";
import { uselessProducts } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MagicalHeader />
      
      {/* Main magical shopping area */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero section with floating elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-neon-purple rounded-full sparkle"></div>
          <div className="absolute top-10 right-1/3 w-3 h-3 bg-slime-green rounded-full float"></div>
          <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-glowing-pink rounded-full sparkle"></div>
          
          <h2 className="text-cosmic text-3xl md:text-4xl font-bold mb-4">
            ✨ Featured Useless Items ✨
          </h2>
          <p className="text-glow text-lg mb-6 font-kalam">
            Hand-picked by our team of professional disappointment specialists
          </p>
          
          <div className="text-neon text-sm animate-pulse mb-8">
            🌟 Warning: These items may cause spontaneous confusion 🌟
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {uselessProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
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
            🎭 Still Not Confused Enough? 🎭
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="text-slime-green">About Our Uselessness</span>
            <span className="text-neon-purple">Customer Confusion</span>
            <span className="text-glowing-pink">Return Policy (LOL)</span>
            <span className="text-mystical-orange">Terms of Bewilderment</span>
          </div>

          <div className="text-muted-foreground text-xs space-y-2">
            <p>© 2024 The Most Useless Shop in the Universe</p>
            <p className="italic">
              "We guarantee 100% uselessness or your confusion back!"
            </p>
            <p className="text-neon text-xs animate-pulse">
              ⚡ Powered by Pure Chaos Magic ⚡
            </p>
          </div>

          {/* Floating footer particles */}
          <div className="relative overflow-hidden h-16">
            <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-neon-purple rounded-full sparkle"></div>
            <div className="absolute bottom-5 right-1/4 w-2 h-2 bg-slime-green rounded-full float"></div>
            <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-glowing-pink rounded-full sparkle"></div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
