import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HesperiaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Hesperia"
      citySlug="hesperia"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["hesperia"]}
    />
  );
};

export default HesperiaResidentialWindowCleaning;
