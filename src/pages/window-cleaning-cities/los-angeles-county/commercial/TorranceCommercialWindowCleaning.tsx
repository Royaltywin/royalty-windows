import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TorranceCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Torrance"
      citySlug="torrance"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["torrance"]}
    />
  );
};

export default TorranceCommercialWindowCleaning;
