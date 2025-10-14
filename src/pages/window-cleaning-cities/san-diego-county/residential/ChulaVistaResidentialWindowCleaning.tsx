import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChulaVistaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Chula Vista"
      citySlug="chula-vista"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["chula-vista"]}
    />
  );
};

export default ChulaVistaResidentialWindowCleaning;
