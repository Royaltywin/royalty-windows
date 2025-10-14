import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaHabraWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="La Habra"
      citySlug="la-habra"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["la-habra"]}
    />
  );
};

export default LaHabraWindowCleaning;
