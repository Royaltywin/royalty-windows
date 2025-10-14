import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PomonaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Pomona"
      citySlug="pomona"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pomona"]}
    />
  );
};

export default PomonaHighRiseWindowCleaning;
