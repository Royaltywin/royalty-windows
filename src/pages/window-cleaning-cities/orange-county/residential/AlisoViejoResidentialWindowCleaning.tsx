import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlisoViejoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Aliso Viejo"
      citySlug="aliso-viejo"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["aliso-viejo"]}
    />
  );
};

export default AlisoViejoResidentialWindowCleaning;
