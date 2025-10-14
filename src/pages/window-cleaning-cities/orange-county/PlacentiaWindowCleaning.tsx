import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PlacentiaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Placentia"
      citySlug="placentia"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["placentia"]}
    />
  );
};

export default PlacentiaWindowCleaning;
