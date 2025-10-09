import { Facebook, Instagram, Linkedin, MapPin, Home, Twitter } from "lucide-react";

interface SocialMediaLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

const SocialMediaLinks = ({ className = "", iconSize = 24, showLabels = false }: SocialMediaLinksProps) => {
  const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://facebook.com/royaltycleaningservices",
      color: "hover:text-[#1877F2]"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/royaltycleaningservices",
      color: "hover:text-[#E4405F]"
    },
    { 
      name: "Yelp", 
      icon: MapPin, 
      url: "https://yelp.com/biz/royalty-cleaning-services",
      color: "hover:text-[#FF1A1A]"
    },
    { 
      name: "Google", 
      icon: MapPin, 
      url: "https://g.page/royalty-cleaning-services",
      color: "hover:text-[#4285F4]"
    },
    { 
      name: "Nextdoor", 
      icon: Home, 
      url: "https://nextdoor.com/pages/royalty-cleaning-services",
      color: "hover:text-[#8BC34A]"
    },
    { 
      name: "X (Twitter)", 
      icon: Twitter, 
      url: "https://twitter.com/royaltycleaning",
      color: "hover:text-foreground"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/company/royalty-cleaning-services",
      color: "hover:text-[#0A66C2]"
    },
  ];

  return (
    <div className={`flex flex-wrap gap-4 justify-center items-center ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${social.color} hover:scale-110 hover:bg-accent/10`}
            aria-label={social.name}
          >
            <Icon size={iconSize} />
            {showLabels && <span className="text-sm font-medium">{social.name}</span>}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
