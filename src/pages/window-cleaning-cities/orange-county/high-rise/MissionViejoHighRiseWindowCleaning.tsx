import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MissionViejoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Mission Viejo"
      citySlug="mission-viejo"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["mission-viejo"]}
    />
  );
};

export default MissionViejoHighRiseWindowCleaning;
