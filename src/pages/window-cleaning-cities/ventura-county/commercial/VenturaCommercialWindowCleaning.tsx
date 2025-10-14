import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VenturaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Ventura"
      citySlug="ventura"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ventura"]}
    />
  );
};

export default VenturaCommercialWindowCleaning;
