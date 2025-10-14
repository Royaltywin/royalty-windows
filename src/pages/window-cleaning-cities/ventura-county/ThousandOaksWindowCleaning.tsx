import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ThousandOaksWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Thousand Oaks"
      citySlug="thousand-oaks"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["thousand-oaks"]}
    />
  );
};

export default ThousandOaksWindowCleaning;
