import { Building2, Home, Store, Factory, School, Hospital } from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Residential",
    description: "Homes, apartments, and condominiums"
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Offices, retail spaces, and business parks"
  },
  {
    icon: Store,
    title: "Retail",
    description: "Shopping centers, stores, and restaurants"
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Warehouses, factories, and manufacturing facilities"
  },
  {
    icon: School,
    title: "Educational",
    description: "Schools, universities, and training centers"
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description: "Medical offices, clinics, and care facilities"
  }
];

const Industries = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-accent mb-4">
            Industries We Service
          </h2>
          <p className="text-xl text-accent/80 max-w-2xl mx-auto">
            Professional cleaning solutions across all sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="bg-accent border-4 border-secondary rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {industry.title}
                </h3>
                <p className="text-secondary">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
