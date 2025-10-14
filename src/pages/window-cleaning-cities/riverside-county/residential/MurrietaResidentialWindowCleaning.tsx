import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MurrietaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Murrieta"
      citySlug="murrieta"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["murrieta"]}
    />
  );
};

export default MurrietaResidentialWindowCleaning;
