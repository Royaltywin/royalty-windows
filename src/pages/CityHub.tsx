import { useParams, Navigate } from "react-router-dom";
import CityHubTemplate from "@/components/CityHubTemplate";
import { counties, slugify } from "@/data/locations";

// Default city content generator
const generateCityContent = (cityName: string, countyName: string) => {
  const introTemplates = [
    `${cityName} is a vibrant community in ${countyName}, California. Royalty Cleaning Services proudly serves ${cityName} residents and businesses with professional cleaning solutions including window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal. Our local team understands the unique needs of ${cityName} properties and delivers exceptional results every time.`,
    `Located in ${countyName}, ${cityName} combines residential charm with modern amenities. Royalty Cleaning Services provides ${cityName} homeowners and business owners with comprehensive cleaning services to keep properties looking their best. From spotless windows to pristine exteriors, we handle all your cleaning needs with professionalism and care.`,
    `${cityName} residents trust Royalty Cleaning Services for all their exterior cleaning needs. Serving ${countyName} with pride, we offer window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal. Our experienced team brings the shine back to ${cityName} properties with reliable, affordable service.`,
  ];

  return {
    intro: introTemplates[Math.floor(Math.random() * introTemplates.length)],
    faqs: [
      {
        question: `Do you serve all neighborhoods in ${cityName}?`,
        answer: `Yes! We provide service throughout ${cityName} and surrounding areas in ${countyName}. Our team is familiar with local properties and ready to serve your neighborhood.`
      },
      {
        question: "What services do you offer?",
        answer: "We offer complete exterior cleaning services including window cleaning (interior & exterior), pressure washing, solar panel cleaning, roof soft washing, gutter cleaning, post-construction cleanup, and graffiti removal."
      },
      {
        question: "How do I get a quote?",
        answer: "Call us at (951) 999-4546 or fill out our online form. We provide free, no-obligation quotes and can usually schedule service within days."
      }
    ]
  };
};

const CityHub = () => {
  const { county, city } = useParams<{ county: string; city: string }>();

  if (!county || !city) {
    return <Navigate to="/locations" replace />;
  }

  // Find the county data
  const countyData = Object.entries(counties).find(
    ([slug]) => slug === county
  )?.[1];

  if (!countyData) {
    return <Navigate to="/locations" replace />;
  }

  // Find the city in the county
  const cityName = countyData.cities.find(
    (c) => slugify(c) === city
  );

  if (!cityName) {
    return <Navigate to="/locations" replace />;
  }

  const content = generateCityContent(cityName, countyData.name);

  return (
    <CityHubTemplate
      cityName={cityName}
      citySlug={city}
      countyName={countyData.name}
      countySlug={county}
      intro={content.intro}
      faqs={content.faqs}
    />
  );
};

export default CityHub;
