import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TorranceWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Torrance"
      citySlug="torrance"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["torrance"]}
    />
  );
};

export default TorranceWindowCleaning;
