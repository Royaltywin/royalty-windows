import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TemeculaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Temecula"
      citySlug="temecula"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["temecula"]}
    />
  );
};

export default TemeculaCommercialWindowCleaning;
