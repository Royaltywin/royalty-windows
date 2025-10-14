import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaPaulaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Santa Paula"
      citySlug="santa-paula"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["santa-paula"]}
    />
  );
};

export default SantaPaulaCommercialWindowCleaning;
