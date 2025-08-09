import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: string[];
  emoji: string;
  soundEffect: string;
  tags: string[];
  animation?: string;
}

export const ProductCard = ({
  id,
  name,
  description,
  price,
  rating,
  reviews,
  emoji,
  soundEffect,
  tags,
  animation = ""
}: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    toast("🛒 Added to Cart!", {
      description: `${name} is now in your shopping cart!`,
      duration: 3000,
    });
  };

  const handleRemoveFromCart = () => {
    setIsAdded(false);
    toast("🗑️ Removed from Cart!", {
      description: `${name} has been removed from your cart!`,
      duration: 2000,
    });
  };

  const handleSoundPreview = () => {
    toast(`🔊 ${soundEffect}`, {
      description: "That's the sound it makes!",
      duration: 2000,
    });
  };

  return (
    <Card className={`product-card ${animation}`}>
      <CardHeader className="text-center pb-4">
        <div className="text-6xl mb-4">
          {emoji}
        </div>
        <CardTitle className="text-cosmic text-xl">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-1 justify-center mt-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-neon mb-2">{price}</div>
          <div className="flex justify-center items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'fill-mystical-orange text-mystical-orange' : 'text-muted'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {reviews.slice(0, 2).map((review, index) => (
            <div key={index} className="text-xs text-muted-foreground italic bg-muted/20 p-2 rounded">
              "{review}"
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          {!isAdded ? (
            <Button
              onClick={handleAddToCart}
              className="btn-cauldron flex-1"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          ) : (
            <Button
              onClick={handleRemoveFromCart}
              className="btn-chaos flex-1"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Remove from Cart
            </Button>
          )}
          
          <Button
            onClick={handleSoundPreview}
            size="sm"
            className="btn-wizard px-3"
          >
            🔊
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};