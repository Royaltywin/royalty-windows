import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CarlsbadResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Carlsbad"
      citySlug="carlsbad"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["carlsbad"]}
    />
  );
};

export default CarlsbadResidentialWindowCleaning;
