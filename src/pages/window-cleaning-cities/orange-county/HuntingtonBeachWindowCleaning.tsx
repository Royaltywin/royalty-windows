import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HuntingtonBeachWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Huntington Beach"
      citySlug="huntington-beach"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["huntington-beach"]}
    />
  );
};

export default HuntingtonBeachWindowCleaning;
