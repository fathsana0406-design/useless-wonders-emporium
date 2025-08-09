import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Wand2, X } from "lucide-react";
import { toast } from "sonner";

export const WishlistSection = () => {
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState<string[]>([]);
  const [fairyMood, setFairyMood] = useState("confused");

  const handleWishUponWishlist = () => {
    if (!wish.trim()) {
      toast("🧚‍♀️ The fairy is confused!", {
        description: "You need to actually make a wish first!",
        duration: 2000,
      });
      return;
    }

    const fairyResponses = [
      "The fairy looked at your wish, shrugged, and flew away",
      "A confused fairy dropped your wish into a black hole",
      "The fairy used your wish as toilet paper",
      "Your wish was delivered to the wrong dimension",
      "The fairy ate your wish. It tasted like disappointment"
    ];

    const randomResponse = fairyResponses[Math.floor(Math.random() * fairyResponses.length)];
    
    setWishes([...wishes, wish]);
    setWish("");
    setFairyMood("ignoring");

    toast("🧚‍♀️ Wish Delivered!", {
      description: randomResponse,
      duration: 4000,
    });

    // Reset fairy mood after a while
    setTimeout(() => setFairyMood("confused"), 3000);
  };

  const removeWish = (index: number) => {
    setWishes(wishes.filter((_, i) => i !== index));
    toast("💨 Wish Vanished!", {
      description: "It probably wasn't going to come true anyway",
      duration: 2000,
    });
  };

  return (
    <Card className="product-card">
      <CardHeader className="text-center">
        <CardTitle className="text-cosmic flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-glowing-pink" />
          Wish Upon a Wishlist
          <Heart className="w-6 h-6 text-glowing-pink" />
        </CardTitle>
        <div className="text-4xl mb-2">
          🧚‍♀️
        </div>
        <p className="text-muted-foreground text-sm">
          Send your product wishes to a confused fairy who will definitely ignore them
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="I wish for something completely useless..."
            className="bg-input/50 border-border"
          />
          <Button 
            onClick={handleWishUponWishlist}
            className="btn-wizard"
            size="sm"
          >
            <Wand2 className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Fairy Status: <span className="text-glowing-pink font-bold">{fairyMood}</span>
        </div>

        {wishes.length > 0 && (
          <div className="space-y-2 max-h-32 overflow-y-auto">
            <div className="text-sm font-bold text-neon-purple">Ignored Wishes:</div>
            {wishes.map((w, index) => (
              <div key={index} className="flex items-center justify-between bg-muted/20 p-2 rounded text-sm">
                <span className="text-muted-foreground line-through">"{w}"</span>
                <Button
                  onClick={() => removeWish(index)}
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="text-xs text-center text-muted-foreground italic">
          *No wishes have ever been granted using this feature
        </div>
      </CardContent>
    </Card>
  );
};