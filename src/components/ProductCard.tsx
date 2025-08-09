import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, Zap } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: string[];
  emoji: string;
  hoverEffect: string;
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
  hoverEffect,
  soundEffect,
  tags,
  animation = ""
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCauldron = () => {
    setIsAdded(true);
    toast("✨ Added to Cauldron! ✨", {
      description: `${name} is now bubbling in your magical cauldron!`,
      duration: 3000,
    });
    
    // Reset after animation
    setTimeout(() => setIsAdded(false), 1000);
  };

  const handleSoundPreview = () => {
    toast(`🔊 ${soundEffect}`, {
      description: "That's the sound it makes!",
      duration: 2000,
    });
  };

  return (
    <Card 
      className={`product-card ${animation}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="text-center pb-4">
        <div className={`text-6xl mb-4 transition-all duration-500 ${
          isHovered ? 'scale-125 rotate-12' : ''
        } ${id === 'black-hole' && isHovered ? 'animate-spin' : ''}`}>
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
          <Button
            onClick={handleAddToCauldron}
            className={`btn-cauldron flex-1 ${isAdded ? 'wobble' : ''}`}
            disabled={isAdded}
          >
            {isAdded ? (
              <>
                <Sparkles className="w-4 h-4 mr-2 sparkle" />
                Brewing!
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Add to Cauldron
              </>
            )}
          </Button>
          
          <Button
            onClick={handleSoundPreview}
            size="sm"
            className="btn-wizard px-3"
          >
            🔊
          </Button>
        </div>

        {isHovered && (
          <div className="text-center text-sm text-slime-green animate-pulse">
            {hoverEffect}
          </div>
        )}
      </CardContent>
    </Card>
  );
};