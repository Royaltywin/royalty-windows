import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RiversideResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Riverside"
      citySlug="riverside"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["riverside"]}
    />
  );
};

export default RiversideResidentialWindowCleaning;
