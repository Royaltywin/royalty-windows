import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlisoViejoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Aliso Viejo"
      citySlug="aliso-viejo"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["aliso-viejo"]}
    />
  );
};

export default AlisoViejoCommercialWindowCleaning;
