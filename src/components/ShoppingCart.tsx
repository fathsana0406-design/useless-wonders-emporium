import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  emoji: string;
  quantity: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  removeFromCart: (id: string) => void;
  isOpen: boolean;
  toggleCart: () => void;
}

export const ShoppingCart = ({ cartItems, removeFromCart, isOpen, toggleCart }: ShoppingCartProps) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Cart Toggle Button */}
      <Button
        onClick={toggleCart}
        className="fixed top-4 right-4 z-50 bg-slime-green text-black font-pixel text-sm p-3"
        size="lg"
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        CART ({totalItems})
      </Button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-cosmic-black/80" onClick={toggleCart}></div>
          
          {/* Cart Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-card border-l-4 border-neon-purple p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-cosmic text-xl font-bold">🛒 USELESS CART</h2>
              <Button onClick={toggleCart} variant="ghost" size="sm">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🕳️</div>
                <p className="text-muted-foreground">Your cart is as empty as the void</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <Card key={`${item.id}-${Math.random()}`} className="p-3 bg-muted/20">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{item.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-foreground truncate">{item.name}</h3>
                        <p className="text-neon-purple text-xs">Qty: {item.quantity}</p>
                        <p className="text-slime-green text-sm font-bold">{item.price}</p>
                      </div>
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        size="sm"
                        className="bg-destructive text-destructive-foreground p-2 min-w-0"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </Card>
                ))}

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-center">
                    <p className="text-cosmic text-lg font-bold">Total Items: {totalItems}</p>
                    <p className="text-muted-foreground text-xs mt-2">
                      "Money back guarantee not guaranteed!"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};