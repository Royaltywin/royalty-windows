import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PerrisWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Perris"
      citySlug="perris"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["perris"]}
    />
  );
};

export default PerrisWindowCleaning;
