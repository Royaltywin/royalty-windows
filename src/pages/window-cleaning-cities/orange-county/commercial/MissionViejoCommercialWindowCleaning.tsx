import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MissionViejoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Mission Viejo"
      citySlug="mission-viejo"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["mission-viejo"]}
    />
  );
};

export default MissionViejoCommercialWindowCleaning;
