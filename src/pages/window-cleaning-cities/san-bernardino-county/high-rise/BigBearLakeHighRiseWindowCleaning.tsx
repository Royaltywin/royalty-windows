import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BigBearLakeHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Big Bear Lake"
      citySlug="big-bear-lake"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["big-bear-lake"]}
    />
  );
};

export default BigBearLakeHighRiseWindowCleaning;
