import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BreaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Brea"
      citySlug="brea"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["brea"]}
    />
  );
};

export default BreaWindowCleaning;
