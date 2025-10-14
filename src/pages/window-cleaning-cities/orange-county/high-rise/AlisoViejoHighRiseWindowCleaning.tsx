import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlisoViejoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Aliso Viejo"
      citySlug="aliso-viejo"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["aliso-viejo"]}
    />
  );
};

export default AlisoViejoHighRiseWindowCleaning;
