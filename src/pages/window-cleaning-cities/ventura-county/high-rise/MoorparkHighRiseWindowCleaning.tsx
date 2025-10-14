import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MoorparkHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Moorpark"
      citySlug="moorpark"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["moorpark"]}
    />
  );
};

export default MoorparkHighRiseWindowCleaning;
