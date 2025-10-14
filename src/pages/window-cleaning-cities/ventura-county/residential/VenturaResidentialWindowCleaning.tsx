import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VenturaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Ventura"
      citySlug="ventura"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ventura"]}
    />
  );
};

export default VenturaResidentialWindowCleaning;
