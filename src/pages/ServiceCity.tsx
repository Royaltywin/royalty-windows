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
        "Soft-Wash Roof Cleaning (Safe for All Roof Types)",
        "Tile & Clay Roof Cleaning",
        "Shingle Roof Cleaning & Treatment",
        "Metal Roof Cleaning",
        "Concrete & Slate Roof Cleaning",
        "Algae, Moss & Lichen Removal",
        "Gutter & Drain Protection During Service",
        "Skylight Cleaning",
        "Solar Panel Cleaning (on roof)",
        "Roof Inspection & Maintenance",
        "Debris Removal & Power Washing",
        "Preventative Roof Maintenance Plans"
      ],
      whyChoose: [
        "30+ years of roofing experience serving Southern California",
        "Safe soft-wash systems for all roof types (tile, shingle, metal, flat)",
        "Biodegradable cleaning solutions - Eco-friendly & safe",
        "Experienced & trained roof technicians",
        "Gutter & drain protection during service",
        "Licensed & insured professionals",
        "Complimentary roof inspection with every cleaning",
        "Extends roof lifespan & prevents costly repairs"
      ],
      faqs: [
        {
          question: `What types of roofs can you clean in ${cityName}?`,
          answer: "We clean all roof types including tile, clay, concrete tile, asphalt shingles, composition shingles, metal, slate, flat roofs, and synthetic roofing systems. Our team is trained on all roofing systems as recommended by the National Roofing Contractors Association."
        },
        {
          question: "Is roof cleaning safe for my roof?",
          answer: "Absolutely! We use gentle soft-wash systems specifically designed for fragile roofing materials. Unlike high-pressure washing that can damage shingles or tiles, our low-pressure methods safely remove algae, moss, and stains while protecting your roof's integrity."
        },
        {
          question: `How often should I have my ${cityName} roof cleaned?`,
          answer: "Most roofs benefit from cleaning every 2-3 years. However, if you notice dark streaks, moss, algae growth, or discoloration, schedule a cleaning sooner. Properties with trees or in humid areas may need more frequent service."
        },
        {
          question: "What is included in your roof cleaning service?",
          answer: "Our comprehensive service includes: debris removal, clearing drains, soft-wash cleaning with biodegradable solutions, gutter protection during service, skylight cleaning (if applicable), solar panel cleaning (if present), and a complimentary roof inspection."
        },
        {
          question: "Will roof cleaning damage my gutters or landscaping?",
          answer: "No. We protect your gutters and drains during the cleaning process, and our eco-friendly, biodegradable solutions are safe for your landscaping, plants, and pets."
        },
        {
          question: "How much does roof cleaning cost?",
          answer: "Costs vary based on roof size, type, and condition. We offer free on-site estimates with transparent, up-front pricing. Most residential roof cleanings range from $300-$800. Call (951) 999-4546 for your free estimate."
        },
        {
          question: "Why does my roof have black streaks or green growth?",
          answer: "Black streaks are caused by algae (Gloeocapsa magma), while green growth is moss or lichen. These organisms feed on roofing materials, trap moisture, and accelerate deterioration. Professional cleaning removes them and extends your roof's lifespan."
        },
        {
          question: "Do you clean commercial roofs too?",
          answer: "Yes! We service both residential and commercial properties throughout Southern California, from mobile trailers to large commercial buildings. We have experience with all commercial roofing systems including TPO, EPDM, and built-up roofs."
        },
        {
          question: "How long does roof cleaning take?",
          answer: "Most residential roof cleanings take 2-4 hours depending on size and condition. Commercial properties may take longer. We work efficiently while ensuring thorough, quality results."
        },
        {
          question: `Are you licensed and insured to work in ${cityName}?`,
          answer: `Yes! Royalty Cleaning Services is fully licensed, bonded, and insured to work throughout ${countyName} including ${cityName}. We've been serving Southern California since 1987 with honest business practices and exceptional service.`
        }
      ],
      isRoofCleaning: true,
      expertiseHighlight: `Welcome to Royalty Roof Cleaning – ${cityName}'s Premier Roof Cleaning Experts. When your roof loses its shine and becomes covered in dirt, algae, or moss, your property's curb appeal and roof longevity suffer. Royalty Roof Cleaning offers the most effective roof cleaning services in ${cityName}, ensuring your home or business stays beautiful, clean, and well-maintained.`,
      residentialSection: {
        title: `Residential Roof Cleaning in ${cityName}, CA`,
        subtitle: "Protect Your Home and Enhance Curb Appeal",
        content: `A clean roof not only enhances your home's appearance but also extends its lifespan. Our expert residential roof cleaning ${cityName} services remove harmful moss, algae, dirt, and debris that weaken shingles and contribute to leaks and costly repairs. Searching for "roof washing near me ${cityName}"? Look no further – call (951) 999-4546!`,
        features: [
          "Eco-friendly cleaning methods",
          "Safe for tile, shingle, and metal roofs",
          "Prevent roof damage and premature wear",
          "Fully licensed and insured"
        ]
      },
      commercialSection: {
        title: `Commercial Roof Cleaning in ${cityName}, CA`,
        subtitle: "Create a Clean, Professional Image for Your Business",
        content: `First impressions matter. Whether you own a retail store, office building, or industrial property, maintaining a clean roof reflects your commitment to quality. Our professional commercial roof cleaning ${cityName} team uses advanced soft washing techniques to safely and thoroughly clean your business's roof without damage.`,
        features: [
          "Flexible scheduling to avoid business interruptions",
          "Specialized equipment for large and high roofs",
          "Long-term protection with preventative treatments",
          "Servicing all types of commercial roofs"
        ]
      },
      valueProposition: `Over time, your roof and tiles can become discolored and damaged by the elements. Rain, wind, humidity, and organic growth like moss, algae, and lichen can all take a toll on your property's appearance and structural integrity. That's where our expert roof and tile cleaning team comes in. Our gentle yet effective cleaning systems are designed to protect fragile materials while delivering spotless results.`
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
      isRoofCleaning={content.isRoofCleaning}
      expertiseHighlight={content.expertiseHighlight}
      residentialSection={content.residentialSection}
      commercialSection={content.commercialSection}
      valueProposition={content.valueProposition}
    />
  );
};

export default ServiceCity;
