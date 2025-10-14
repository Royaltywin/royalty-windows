import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TorranceHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Torrance"
      citySlug="torrance"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["torrance"]}
    />
  );
};

export default TorranceHighRiseWindowCleaning;
