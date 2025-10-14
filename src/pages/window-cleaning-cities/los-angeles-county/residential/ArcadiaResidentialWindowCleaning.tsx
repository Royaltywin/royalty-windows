import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ArcadiaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Arcadia"
      citySlug="arcadia"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["arcadia"]}
    />
  );
};

export default ArcadiaResidentialWindowCleaning;
