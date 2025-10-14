import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OxnardResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Oxnard"
      citySlug="oxnard"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["oxnard"]}
    />
  );
};

export default OxnardResidentialWindowCleaning;
