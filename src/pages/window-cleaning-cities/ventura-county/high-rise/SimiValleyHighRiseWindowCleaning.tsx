import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SimiValleyHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Simi Valley"
      citySlug="simi-valley"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["simi-valley"]}
    />
  );
};

export default SimiValleyHighRiseWindowCleaning;
