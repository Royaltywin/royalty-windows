import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TemeculaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Temecula"
      citySlug="temecula"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["temecula"]}
    />
  );
};

export default TemeculaResidentialWindowCleaning;
