import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CulverCityWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Culver City"
      citySlug="culver-city"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["culver-city"]}
    />
  );
};

export default CulverCityWindowCleaning;
