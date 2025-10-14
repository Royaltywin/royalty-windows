import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Corona"
      citySlug="corona"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["corona"]}
    />
  );
};

export default CoronaResidentialWindowCleaning;
