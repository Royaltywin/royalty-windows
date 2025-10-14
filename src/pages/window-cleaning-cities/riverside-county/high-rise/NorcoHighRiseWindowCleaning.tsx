import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorcoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Norco"
      citySlug="norco"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["norco"]}
    />
  );
};

export default NorcoHighRiseWindowCleaning;
