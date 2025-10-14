import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaMonicaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Santa Monica"
      citySlug="santa-monica"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["santa-monica"]}
    />
  );
};

export default SantaMonicaResidentialWindowCleaning;
