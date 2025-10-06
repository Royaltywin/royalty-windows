import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
  schemaData?: any;
}

const SEOHead = ({
  title = "Royalty Cleaning Services - Professional Window & Exterior Cleaning",
  description = "Professional cleaning services in Southern California. Window cleaning, pressure washing, solar panel cleaning, and more. Licensed, insured, and satisfaction guaranteed.",
  type = "website",
  url = "https://getroyaltyservices.com",
  image = "https://getroyaltyservices.com/og-image.jpg",
  schemaData
}: SEOHeadProps) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Royalty Cleaning Services",
    "image": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17401 Bastanchury Rd",
      "addressLocality": "Yorba Linda",
      "addressRegion": "CA",
      "postalCode": "92886",
      "addressCountry": "US"
    },
    "telephone": "+1-951-999-4546",
    "email": "info@getroyaltyservices.com",
    "url": url,
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "State",
        "name": "California"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.8886",
        "longitude": "-117.8131"
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pressure Washing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Panel Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graffiti Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleaning"
          }
        }
      ]
    }
  };

  const schema = schemaData || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
