import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const MissionViejoWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["mission-viejo"]}
      cityName="Mission Viejo"
      citySlug="mission-viejo"
    />
  );
};

export default MissionViejoWindowCleaning;
