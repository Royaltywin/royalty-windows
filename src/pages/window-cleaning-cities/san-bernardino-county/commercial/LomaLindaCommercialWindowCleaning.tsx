import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LomaLindaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Loma Linda"
      citySlug="loma-linda"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["loma-linda"]}
    />
  );
};

export default LomaLindaCommercialWindowCleaning;
