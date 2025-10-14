import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorwalkResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Norwalk"
      citySlug="norwalk"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["norwalk"]}
    />
  );
};

export default NorwalkResidentialWindowCleaning;
