import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NationalCityResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="National City"
      citySlug="national-city"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["national-city"]}
    />
  );
};

export default NationalCityResidentialWindowCleaning;
