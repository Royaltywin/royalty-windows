import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GardenGroveResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Garden Grove"
      citySlug="garden-grove"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["garden-grove"]}
    />
  );
};

export default GardenGroveResidentialWindowCleaning;
