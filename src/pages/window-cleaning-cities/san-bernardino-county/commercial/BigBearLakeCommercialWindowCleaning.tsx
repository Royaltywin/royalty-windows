import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BigBearLakeCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Big Bear Lake"
      citySlug="big-bear-lake"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["big-bear-lake"]}
    />
  );
};

export default BigBearLakeCommercialWindowCleaning;
