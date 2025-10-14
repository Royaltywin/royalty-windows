import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const UplandResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Upland"
      citySlug="upland"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["upland"]}
    />
  );
};

export default UplandResidentialWindowCleaning;
