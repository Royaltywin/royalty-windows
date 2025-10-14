import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MenifeeResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Menifee"
      citySlug="menifee"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["menifee"]}
    />
  );
};

export default MenifeeResidentialWindowCleaning;
