import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BurbankResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Burbank"
      citySlug="burbank"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["burbank"]}
    />
  );
};

export default BurbankResidentialWindowCleaning;
