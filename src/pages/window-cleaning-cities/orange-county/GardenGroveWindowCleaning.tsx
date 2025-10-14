import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GardenGroveWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Garden Grove"
      citySlug="garden-grove"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["garden-grove"]}
    />
  );
};

export default GardenGroveWindowCleaning;
