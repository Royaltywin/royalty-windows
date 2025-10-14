import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CanyonLakeResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Canyon Lake"
      citySlug="canyon-lake"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["canyon-lake"]}
    />
  );
};

export default CanyonLakeResidentialWindowCleaning;
