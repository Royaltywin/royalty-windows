import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MoorparkWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Moorpark"
      citySlug="moorpark"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["moorpark"]}
    />
  );
};

export default MoorparkWindowCleaning;
