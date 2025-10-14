import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaAnaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Santa Ana"
      citySlug="santa-ana"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["santa-ana"]}
    />
  );
};

export default SantaAnaResidentialWindowCleaning;
