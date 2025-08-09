import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles, Zap, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export const MagicalHeader = () => {
  const [cauldronCount, setCauldronCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleWhyTho = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      toast("🌀 WHY THO?! 🌀", {
        description: "The button has achieved sentience and refuses to stop spinning!",
        duration: 4000,
      });
    }
  };

  const handleSummonWizard = () => {
    toast("🧙‍♂️ NO DISCOUNTS FOR YOU!", {
      description: "*POOF* The wizard vanished in a cloud of disappointment",
      duration: 3000,
    });
  };

  const handleNeedMoreUseless = () => {
    toast("🎰 SLOT MACHINE ACTIVATED!", {
      description: "Adding 10 more pointless items to confuse you further!",
      duration: 3000,
    });
  };

  return (
    <header className="relative overflow-hidden bg-cosmic-black/50 backdrop-blur-sm border-b-2 border-neon-purple">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-glowing-pink/10 to-slime-green/10 animate-pulse"></div>
      
      <div className="relative container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Main Title */}
          <div className="text-center space-y-2">
            <h1 className="text-cosmic text-4xl md:text-6xl font-bold sparkle">
              ✨ WONDERLESS EMPORIUM ✨
            </h1>
            <p className="text-glow text-lg md:text-xl font-kalam">
              Premium Pointless Products Since Never
            </p>
            <div className="text-neon text-sm animate-pulse">
              🌟 Where Dreams Come to Disappoint 🌟
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button className="btn-cauldron">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart ({cauldronCount})
            </Button>

            <Button 
              onClick={handleSummonWizard}
              className="btn-wizard"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Summon Deal Wizard
            </Button>

            <Button 
              onClick={handleNeedMoreUseless}
              className="btn-chaos"
            >
              <Zap className="w-4 h-4 mr-2" />
              Need More Useless?
            </Button>

            <Button
              onClick={handleWhyTho}
              className={`btn-chaos ${isSpinning ? 'spin-eternal' : ''}`}
              disabled={isSpinning}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              WHY THO?
            </Button>
          </div>

          {/* Mystical Navigation */}
          <nav className="flex gap-6 text-sm font-pixel">
            <span className="text-slime-green cursor-pointer hover:glow-pulse">Useless Items</span>
            <span className="text-neon-purple cursor-pointer hover:glow-pulse">Broken Dreams</span>
            <span className="text-glowing-pink cursor-pointer hover:glow-pulse">Regrettable Purchases</span>
            <span className="text-mystical-orange cursor-pointer hover:glow-pulse">Why Did I Buy This?</span>
          </nav>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-purple rounded-full sparkle"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-slime-green rounded-full float"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-glowing-pink rounded-full sparkle"></div>
      </div>
    </header>
  );
};