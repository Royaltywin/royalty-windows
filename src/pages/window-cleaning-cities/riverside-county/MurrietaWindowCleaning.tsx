import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MurrietaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Murrieta"
      citySlug="murrieta"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["murrieta"]}
    />
  );
};

export default MurrietaWindowCleaning;
