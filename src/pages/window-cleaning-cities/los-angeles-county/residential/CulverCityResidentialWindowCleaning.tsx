import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CulverCityResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Culver City"
      citySlug="culver-city"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["culver-city"]}
    />
  );
};

export default CulverCityResidentialWindowCleaning;
