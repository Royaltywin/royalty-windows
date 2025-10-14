import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OrangeCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Orange"
      citySlug="orange"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["orange"]}
    />
  );
};

export default OrangeCommercialWindowCleaning;
