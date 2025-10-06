import { Sparkles, Droplets, Home, Sun, Trash2, Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Window Cleaning",
    description: "Crystal clear windows for residential and commercial properties",
    link: "/window-cleaning"
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Professional power washing for driveways, patios, and more",
    link: "/pressure-washing"
  },
  {
    icon: Home,
    title: "Roof Cleaning",
    description: "Extend roof life with safe, effective cleaning methods",
    link: "/roof-cleaning"
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description: "Maximize efficiency with professional solar panel maintenance",
    link: "/solar-panel-cleaning"
  },
  {
    icon: Paintbrush,
    title: "Graffiti Removal",
    description: "Fast, effective removal to restore your property",
    link: "/graffiti-removal"
  },
  {
    icon: Trash2,
    title: "Construction Cleanup",
    description: "Move-in ready cleaning for new builds and renovations",
    link: "/construction-cleanup"
  }
];

const Services = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24" id="services">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">
          Our Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional cleaning solutions for every need
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              to={service.link}
              className="bg-transparent border-4 border-[#ff00ff] hover:border-[#ff00ff] rounded-2xl p-8 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="w-20 h-20 bg-[#ff00ff] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-lg text-white">
                {service.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
