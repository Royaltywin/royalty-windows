import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VictorvilleHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Victorville"
      citySlug="victorville"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["victorville"]}
    />
  );
};

export default VictorvilleHighRiseWindowCleaning;
