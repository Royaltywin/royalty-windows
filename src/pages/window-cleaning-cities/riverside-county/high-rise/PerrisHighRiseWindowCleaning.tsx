import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PerrisHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Perris"
      citySlug="perris"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["perris"]}
    />
  );
};

export default PerrisHighRiseWindowCleaning;
