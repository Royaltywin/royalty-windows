import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RamonaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Ramona"
      citySlug="ramona"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["ramona"]}
    />
  );
};

export default RamonaResidentialWindowCleaning;
