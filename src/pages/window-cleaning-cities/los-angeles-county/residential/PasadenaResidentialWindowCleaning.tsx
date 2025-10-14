import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PasadenaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Pasadena"
      citySlug="pasadena"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pasadena"]}
    />
  );
};

export default PasadenaResidentialWindowCleaning;
