import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ThousandOaksCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Thousand Oaks"
      citySlug="thousand-oaks"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["thousand-oaks"]}
    />
  );
};

export default ThousandOaksCommercialWindowCleaning;
