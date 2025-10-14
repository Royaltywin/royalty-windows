import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FountainValleyHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Fountain Valley"
      citySlug="fountain-valley"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fountain-valley"]}
    />
  );
};

export default FountainValleyHighRiseWindowCleaning;
