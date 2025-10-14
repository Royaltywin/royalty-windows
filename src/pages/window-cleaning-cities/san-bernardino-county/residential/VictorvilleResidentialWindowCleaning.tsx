import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VictorvilleResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Victorville"
      citySlug="victorville"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["victorville"]}
    />
  );
};

export default VictorvilleResidentialWindowCleaning;
