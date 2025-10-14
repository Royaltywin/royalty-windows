import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MissionViejoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Mission Viejo"
      citySlug="mission-viejo"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["mission-viejo"]}
    />
  );
};

export default MissionViejoResidentialWindowCleaning;
