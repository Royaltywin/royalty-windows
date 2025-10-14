import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PlacentiaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Placentia"
      citySlug="placentia"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["placentia"]}
    />
  );
};

export default PlacentiaResidentialWindowCleaning;
