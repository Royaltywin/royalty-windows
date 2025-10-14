import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MorenoValleyHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Moreno Valley"
      citySlug="moreno-valley"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["moreno-valley"]}
    />
  );
};

export default MorenoValleyHighRiseWindowCleaning;
