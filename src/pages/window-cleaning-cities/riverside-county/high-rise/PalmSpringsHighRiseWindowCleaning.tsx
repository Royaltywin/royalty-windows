import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmSpringsHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Palm Springs"
      citySlug="palm-springs"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-springs"]}
    />
  );
};

export default PalmSpringsHighRiseWindowCleaning;
