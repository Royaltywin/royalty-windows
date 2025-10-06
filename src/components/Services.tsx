import { Sparkles, Droplets, Home, Sun } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Window Cleaning",
    description: "Crystal clear windows for residential and commercial properties"
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Professional power washing for driveways, patios, and more"
  },
  {
    icon: Home,
    title: "House Washing",
    description: "Complete exterior cleaning to restore your home's beauty"
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description: "Maximize efficiency with professional solar panel maintenance"
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
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-card border-2 border-border hover:border-primary rounded-2xl p-6 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
