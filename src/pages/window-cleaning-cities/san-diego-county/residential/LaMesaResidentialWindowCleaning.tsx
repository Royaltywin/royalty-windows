import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaMesaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="La Mesa"
      citySlug="la-mesa"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["la-mesa"]}
    />
  );
};

export default LaMesaResidentialWindowCleaning;
