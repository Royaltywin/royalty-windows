import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmSpringsResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Palm Springs"
      citySlug="palm-springs"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-springs"]}
    />
  );
};

export default PalmSpringsResidentialWindowCleaning;
