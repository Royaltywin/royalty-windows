import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MoorparkResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Moorpark"
      citySlug="moorpark"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["moorpark"]}
    />
  );
};

export default MoorparkResidentialWindowCleaning;
