import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorcoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Norco"
      citySlug="norco"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["norco"]}
    />
  );
};

export default NorcoResidentialWindowCleaning;
