import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GlendaleCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Glendale"
      citySlug="glendale"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["glendale"]}
    />
  );
};

export default GlendaleCommercialWindowCleaning;
