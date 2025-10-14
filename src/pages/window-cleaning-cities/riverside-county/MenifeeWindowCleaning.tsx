import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MenifeeWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Menifee"
      citySlug="menifee"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["menifee"]}
    />
  );
};

export default MenifeeWindowCleaning;
