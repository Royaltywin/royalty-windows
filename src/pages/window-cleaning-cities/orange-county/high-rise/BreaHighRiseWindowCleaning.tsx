import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BreaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Brea"
      citySlug="brea"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["brea"]}
    />
  );
};

export default BreaHighRiseWindowCleaning;
