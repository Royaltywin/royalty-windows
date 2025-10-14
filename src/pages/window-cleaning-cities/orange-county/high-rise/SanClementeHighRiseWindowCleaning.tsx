import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanClementeHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="San Clemente"
      citySlug="san-clemente"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["san-clemente"]}
    />
  );
};

export default SanClementeHighRiseWindowCleaning;
