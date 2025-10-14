import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmDesertWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Palm Desert"
      citySlug="palm-desert"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-desert"]}
    />
  );
};

export default PalmDesertWindowCleaning;
