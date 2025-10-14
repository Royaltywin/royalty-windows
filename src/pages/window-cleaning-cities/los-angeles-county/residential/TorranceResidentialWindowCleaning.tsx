import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TorranceResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Torrance"
      citySlug="torrance"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["torrance"]}
    />
  );
};

export default TorranceResidentialWindowCleaning;
