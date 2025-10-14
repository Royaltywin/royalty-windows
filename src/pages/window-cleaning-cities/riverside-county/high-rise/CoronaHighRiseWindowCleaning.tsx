import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Corona"
      citySlug="corona"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["corona"]}
    />
  );
};

export default CoronaHighRiseWindowCleaning;
