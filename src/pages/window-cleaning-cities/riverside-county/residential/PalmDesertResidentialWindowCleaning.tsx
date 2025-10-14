import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmDesertResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Palm Desert"
      citySlug="palm-desert"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-desert"]}
    />
  );
};

export default PalmDesertResidentialWindowCleaning;
