import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorwalkHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Norwalk"
      citySlug="norwalk"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["norwalk"]}
    />
  );
};

export default NorwalkHighRiseWindowCleaning;
