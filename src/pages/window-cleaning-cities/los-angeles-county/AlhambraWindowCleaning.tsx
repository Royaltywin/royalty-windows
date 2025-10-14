import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlhambraWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Alhambra"
      citySlug="alhambra"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["alhambra"]}
    />
  );
};

export default AlhambraWindowCleaning;
