import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaPaulaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Santa Paula"
      citySlug="santa-paula"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["santa-paula"]}
    />
  );
};

export default SantaPaulaResidentialWindowCleaning;
