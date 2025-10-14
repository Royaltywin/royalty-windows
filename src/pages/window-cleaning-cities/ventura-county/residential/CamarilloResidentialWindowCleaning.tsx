import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CamarilloResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Camarillo"
      citySlug="camarillo"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["camarillo"]}
    />
  );
};

export default CamarilloResidentialWindowCleaning;
