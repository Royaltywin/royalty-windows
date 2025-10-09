import { X, Star, Phone, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SocialMediaLinks from "./SocialMediaLinks";

interface CountyTileModalProps {
  isOpen: boolean;
  onClose: () => void;
  countyName: string;
  serviceHighlight: string;
  onBookNow: () => void;
  onGetQuote: () => void;
}

const CountyTileModal = ({
  isOpen,
  onClose,
  countyName,
  serviceHighlight,
  onBookNow,
  onGetQuote,
}: CountyTileModalProps) => {
  const trustBadges = [
    { title: "Licensed, Insured & Bonded", icon: "🛡️" },
    { title: "10+ Years Experience", icon: "⭐" },
    { title: "Eco-Friendly Products", icon: "🌿" },
    { title: "Background-Checked Staff", icon: "✓" },
    { title: "100% Satisfaction Guaranteed", icon: "💯" },
    { title: `Local ${countyName} Owned`, icon: "🏠" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative bg-gradient-to-r from-primary via-secondary to-accent p-6 -m-6 mb-4 rounded-t-lg">
          <DialogTitle className="text-3xl font-black text-white text-center">
            {countyName}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </DialogHeader>

        <div className="space-y-6 px-2">
          {/* Service Highlight */}
          <div className="text-center">
            <p className="text-xl font-bold text-foreground mb-2">
              {serviceHighlight}
            </p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              #1 on Google and social media
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={onBookNow}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold"
            >
              <Phone className="mr-2 w-5 h-5" />
              Book Now
            </Button>
            <Button
              onClick={onGetQuote}
              variant="outline"
              size="lg"
              className="w-full border-2 border-accent hover:bg-accent/10 font-bold"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Get Free Quote
            </Button>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-center text-sm font-semibold text-muted-foreground mb-3">
              Connect With Us
            </h4>
            <SocialMediaLinks iconSize={20} />
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="text-center text-lg font-bold text-foreground mb-4">
              Why Choose Royalty?
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20"
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-sm font-medium text-foreground">
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CountyTileModal;
