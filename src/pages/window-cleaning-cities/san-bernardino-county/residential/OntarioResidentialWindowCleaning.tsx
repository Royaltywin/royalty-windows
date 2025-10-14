import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OntarioResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Ontario"
      citySlug="ontario"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["ontario"]}
    />
  );
};

export default OntarioResidentialWindowCleaning;
