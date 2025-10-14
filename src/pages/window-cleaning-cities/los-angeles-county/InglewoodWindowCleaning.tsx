import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const InglewoodWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Inglewood"
      citySlug="inglewood"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["inglewood"]}
    />
  );
};

export default InglewoodWindowCleaning;
