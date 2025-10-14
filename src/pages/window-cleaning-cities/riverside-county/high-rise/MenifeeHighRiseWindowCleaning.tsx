import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MenifeeHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Menifee"
      citySlug="menifee"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["menifee"]}
    />
  );
};

export default MenifeeHighRiseWindowCleaning;
