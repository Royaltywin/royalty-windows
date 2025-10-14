import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CostaMesaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Costa Mesa"
      citySlug="costa-mesa"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["costa-mesa"]}
    />
  );
};

export default CostaMesaHighRiseWindowCleaning;
