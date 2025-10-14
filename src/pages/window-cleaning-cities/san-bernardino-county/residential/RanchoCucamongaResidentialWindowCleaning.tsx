import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RanchoCucamongaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Rancho Cucamonga"
      citySlug="rancho-cucamonga"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["rancho-cucamonga"]}
    />
  );
};

export default RanchoCucamongaResidentialWindowCleaning;
