import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaAnaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Santa Ana"
      citySlug="santa-ana"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["santa-ana"]}
    />
  );
};

export default SantaAnaCommercialWindowCleaning;
