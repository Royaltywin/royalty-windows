import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GardenGroveCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Garden Grove"
      citySlug="garden-grove"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["garden-grove"]}
    />
  );
};

export default GardenGroveCommercialWindowCleaning;
