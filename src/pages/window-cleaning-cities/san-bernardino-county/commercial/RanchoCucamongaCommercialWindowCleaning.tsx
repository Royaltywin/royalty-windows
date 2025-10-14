import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RanchoCucamongaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Rancho Cucamonga"
      citySlug="rancho-cucamonga"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["rancho-cucamonga"]}
    />
  );
};

export default RanchoCucamongaCommercialWindowCleaning;
