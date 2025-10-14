import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PerrisResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Perris"
      citySlug="perris"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["perris"]}
    />
  );
};

export default PerrisResidentialWindowCleaning;
