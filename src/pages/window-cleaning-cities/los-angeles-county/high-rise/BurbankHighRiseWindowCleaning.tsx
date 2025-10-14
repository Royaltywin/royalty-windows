import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BurbankHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Burbank"
      citySlug="burbank"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["burbank"]}
    />
  );
};

export default BurbankHighRiseWindowCleaning;
