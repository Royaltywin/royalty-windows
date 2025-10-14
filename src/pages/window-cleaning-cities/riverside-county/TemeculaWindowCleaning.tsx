import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TemeculaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Temecula"
      citySlug="temecula"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["temecula"]}
    />
  );
};

export default TemeculaWindowCleaning;
