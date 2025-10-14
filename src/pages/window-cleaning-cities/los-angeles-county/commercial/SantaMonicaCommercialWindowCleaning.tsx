import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaMonicaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Santa Monica"
      citySlug="santa-monica"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["santa-monica"]}
    />
  );
};

export default SantaMonicaCommercialWindowCleaning;
