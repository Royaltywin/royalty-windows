import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CanyonLakeHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Canyon Lake"
      citySlug="canyon-lake"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["canyon-lake"]}
    />
  );
};

export default CanyonLakeHighRiseWindowCleaning;
