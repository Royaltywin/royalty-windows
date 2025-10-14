import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmSpringsWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Palm Springs"
      citySlug="palm-springs"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-springs"]}
    />
  );
};

export default PalmSpringsWindowCleaning;
