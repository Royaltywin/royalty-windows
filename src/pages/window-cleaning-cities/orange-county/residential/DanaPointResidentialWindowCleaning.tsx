import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DanaPointResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Dana Point"
      citySlug="dana-point"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["dana-point"]}
    />
  );
};

export default DanaPointResidentialWindowCleaning;
