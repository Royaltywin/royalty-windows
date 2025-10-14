import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GardenGroveHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Garden Grove"
      citySlug="garden-grove"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["garden-grove"]}
    />
  );
};

export default GardenGroveHighRiseWindowCleaning;
