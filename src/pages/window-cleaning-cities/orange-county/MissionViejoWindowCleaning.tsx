import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MissionViejoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Mission Viejo"
      citySlug="mission-viejo"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["mission-viejo"]}
    />
  );
};

export default MissionViejoWindowCleaning;
