import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BeaumontWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Beaumont"
      citySlug="beaumont"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["beaumont"]}
    />
  );
};

export default BeaumontWindowCleaning;
