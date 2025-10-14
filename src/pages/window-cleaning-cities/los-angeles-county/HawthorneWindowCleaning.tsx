import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HawthorneWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Hawthorne"
      citySlug="hawthorne"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["hawthorne"]}
    />
  );
};

export default HawthorneWindowCleaning;
