import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmDesertHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Palm Desert"
      citySlug="palm-desert"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-desert"]}
    />
  );
};

export default PalmDesertHighRiseWindowCleaning;
