import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AppleValleyResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Apple Valley"
      citySlug="apple-valley"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["apple-valley"]}
    />
  );
};

export default AppleValleyResidentialWindowCleaning;
