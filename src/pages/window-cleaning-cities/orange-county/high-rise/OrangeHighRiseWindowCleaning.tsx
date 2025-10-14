import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OrangeHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Orange"
      citySlug="orange"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["orange"]}
    />
  );
};

export default OrangeHighRiseWindowCleaning;
