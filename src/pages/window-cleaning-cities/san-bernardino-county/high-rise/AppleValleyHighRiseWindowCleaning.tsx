import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AppleValleyHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Apple Valley"
      citySlug="apple-valley"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["apple-valley"]}
    />
  );
};

export default AppleValleyHighRiseWindowCleaning;
