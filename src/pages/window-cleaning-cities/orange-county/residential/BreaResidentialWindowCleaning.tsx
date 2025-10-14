import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BreaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Brea"
      citySlug="brea"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["brea"]}
    />
  );
};

export default BreaResidentialWindowCleaning;
