import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VistaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Vista"
      citySlug="vista"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["vista"]}
    />
  );
};

export default VistaResidentialWindowCleaning;
