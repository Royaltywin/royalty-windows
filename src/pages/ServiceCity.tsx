import { useParams, Navigate } from "react-router-dom";
import ServiceCityTemplate from "@/components/ServiceCityTemplate";
import { counties, services, slugify } from "@/data/locations";

// Generate service-city content
const generateServiceCityContent = (
  serviceName: string,
  serviceSlug: string,
  cityName: string,
  countyName: string
) => {
  const serviceInfo: Record<string, any> = {
    "window-cleaning": {
      serviceOptions: [
        "Interior & Exterior Window Cleaning",
        "Screen & Track Cleaning",
        "Hard Water Stain Removal",
        "Post-Construction Glass Detailing",
        "Skylight & Mirror Cleaning",
        "High-Reach Window Cleaning"
      ],
      whyChoose: [
        "Licensed & insured • Local technicians",
        "Up-front pricing • On-time arrivals",
        "Eco-friendly solutions & streak-free finish",
        "Satisfaction guarantee"
      ],
      faqs: [
        {
          question: `How often should I clean my ${cityName} home's windows?`,
          answer: "Most residential clients schedule every 3-6 months. Coastal homes may need more frequent cleanings due to salt and mineral buildup."
        },
        {
          question: "Do you clean screens and tracks?",
          answer: "Yes! Standard packages include screen washing and track cleaning at no extra charge."
        }
      ]
    },
    "pressure-washing": {
      serviceOptions: [
        "Driveway & Garage Floor Cleaning",
        "Walkways & Sidewalks",
        "Siding & Stucco (Soft-Wash)",
        "Patios & Pool Decks",
        "Fences & Retaining Walls",
        "Commercial Exterior Cleaning"
      ],
      whyChoose: [
        "Professional equipment & surface-safe methods",
        "Eco-friendly cleaners",
        "Licensed/insured technicians",
        "Clear quotes and fast scheduling"
      ],
      faqs: [
        {
          question: "Is pressure washing safe for stucco?",
          answer: "Yes! We use soft-wash techniques for delicate surfaces like stucco and painted exteriors to prevent damage."
        },
        {
          question: "Can you remove oil stains from concrete?",
          answer: "Most oil stains lighten significantly. We use hot-water pressure washing and professional degreasers for best results."
        }
      ]
    },
    "solar-panel-cleaning": {
      serviceOptions: [
        "Residential Solar Panel Cleaning",
        "Commercial Solar Array Cleaning",
        "Soft-Wash for Delicate Panels",
        "Hard Water Spot Removal",
        "Regular Maintenance Plans",
        "Efficiency Testing"
      ],
      whyChoose: [
        "Dust & debris reduce efficiency by up to 25%",
        "Regular cleaning maximizes energy output",
        "Extends solar panel lifespan",
        "Eco-friendly, water-efficient methods"
      ],
      faqs: [
        {
          question: "How often should solar panels be cleaned?",
          answer: "Most systems benefit from quarterly cleaning. Desert and dusty areas may need monthly service for optimal efficiency."
        },
        {
          question: "Will cleaning improve energy output?",
          answer: "Yes! Clean panels can improve efficiency by 15-25%, especially in dusty or high-pollen areas."
        }
      ]
    },
    "roof-cleaning": {
      serviceOptions: [
        "Soft-Wash Roof Cleaning",
        "Algae & Moss Removal",
        "Tile Roof Cleaning",
        "Shingle Roof Treatment",
        "Gutter & Downspout Cleaning",
        "Preventative Maintenance"
      ],
      whyChoose: [
        "Safe for all roof types",
        "Kills organic growth at the source",
        "Extends roof lifespan",
        "Eco-friendly solutions"
      ],
      faqs: [
        {
          question: "Is roof cleaning safe for my shingles?",
          answer: "Yes! We use low-pressure soft-wash methods specifically designed to protect shingles, tiles, and all roofing materials."
        },
        {
          question: "How often should roofs be cleaned?",
          answer: "Most roofs benefit from cleaning every 2-3 years, or sooner if you notice dark streaks, moss, or algae growth."
        }
      ]
    },
    "gutter-cleaning": {
      serviceOptions: [
        "Complete Gutter Cleaning",
        "Downspout Clearing",
        "Debris Removal & Disposal",
        "Gutter Guard Installation",
        "Seasonal Maintenance Plans",
        "Leak Detection & Repair"
      ],
      whyChoose: [
        "Prevent water damage & foundation issues",
        "Extend gutter lifespan",
        "Safe, professional service",
        "Affordable pricing with no hidden fees"
      ],
      faqs: [
        {
          question: "How often should gutters be cleaned?",
          answer: "Most homes need gutter cleaning twice per year—spring and fall. Properties with many trees may need more frequent service."
        },
        {
          question: "Do you remove and dispose of debris?",
          answer: "Yes! We remove all debris and leave your property clean and tidy."
        }
      ]
    },
    "construction-cleanup": {
      serviceOptions: [
        "Post-Construction Deep Cleaning",
        "Dust & Debris Removal",
        "Window & Track Cleaning",
        "Floor & Surface Cleaning",
        "Final Walk-Through Clean",
        "Move-In Ready Service"
      ],
      whyChoose: [
        "Trusted by contractors & builders",
        "Affordable post-construction cleaning prices",
        "Flexible scheduling & fast turnaround",
        "Move-in ready results guaranteed"
      ],
      faqs: [
        {
          question: "When should post-construction cleaning happen?",
          answer: "We typically clean after rough construction is complete and before final walk-through or move-in."
        },
        {
          question: "Do you handle both residential and commercial projects?",
          answer: "Yes! We clean new homes, remodels, commercial buildings, and large-scale construction projects."
        }
      ]
    },
    "graffiti-removal": {
      serviceOptions: [
        "Pressure Washing & Soft Washing",
        "Chemical Graffiti Removal",
        "Paint Restoration",
        "Anti-Graffiti Coatings",
        "Same-Day Emergency Service",
        "Ongoing Protection Plans"
      ],
      whyChoose: [
        "Fast-response service available",
        "Safe for all surfaces",
        "Eco-friendly removal methods",
        "Long-term protection solutions"
      ],
      faqs: [
        {
          question: "How quickly can you remove graffiti?",
          answer: "We offer same-day service for most graffiti removal requests to minimize visual impact and prevent repeat vandalism."
        },
        {
          question: "Will graffiti removal damage my property?",
          answer: "No! We use appropriate methods for each surface type to safely remove graffiti without damaging paint, stucco, or other materials."
        }
      ]
    }
  };

  const info = serviceInfo[serviceSlug] || serviceInfo["window-cleaning"];

  return {
    title: `Royalty ${serviceName} ${cityName}, CA | Residential & Commercial`,
    metaDescription: `Top-rated ${serviceName.toLowerCase()} in ${cityName}, ${countyName}. Residential & commercial. Free estimates. Call (951) 999-4546.`,
    heading: `Royalty ${serviceName} in ${cityName}, California`,
    intro: `Looking for professional ${serviceName.toLowerCase()} in ${cityName}? Royalty Cleaning Services provides expert ${serviceName.toLowerCase()} for ${cityName} homes and businesses in ${countyName}. Our experienced team delivers outstanding results with friendly service, transparent pricing, and a satisfaction guarantee.`,
    ...info
  };
};

const ServiceCity = () => {
  const { service, city } = useParams<{ service: string; city: string }>();

  if (!service || !city) {
    return <Navigate to="/locations" replace />;
  }

  // Find the service
  const serviceData = services.find((s) => s.key === service);
  if (!serviceData) {
    return <Navigate to="/locations" replace />;
  }

  // Find which county the city belongs to
  let countyData: any = null;
  let countySlug = "";
  let cityName = "";

  for (const [slug, data] of Object.entries(counties)) {
    const foundCity = data.cities.find((c) => slugify(c) === city);
    if (foundCity) {
      countyData = data;
      countySlug = slug;
      cityName = foundCity;
      break;
    }
  }

  if (!countyData || !cityName) {
    return <Navigate to="/locations" replace />;
  }

  const content = generateServiceCityContent(
    serviceData.name,
    service,
    cityName,
    countyData.name
  );

  // Get other services for cross-links
  const otherServices = services
    .filter((s) => s.key !== service)
    .map((s) => ({ name: s.name, slug: s.key }));

  return (
    <ServiceCityTemplate
      serviceName={serviceData.name}
      serviceSlug={service}
      cityName={cityName}
      citySlug={city}
      countyName={countyData.name}
      countySlug={countySlug}
      title={content.title}
      metaDescription={content.metaDescription}
      heading={content.heading}
      intro={content.intro}
      whyChoose={content.whyChoose}
      serviceOptions={content.serviceOptions}
      faqs={content.faqs}
      otherServices={otherServices}
    />
  );
};

export default ServiceCity;
