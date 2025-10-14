import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AppleValleyCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Apple Valley"
      citySlug="apple-valley"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["apple-valley"]}
    />
  );
};

export default AppleValleyCommercialWindowCleaning;
