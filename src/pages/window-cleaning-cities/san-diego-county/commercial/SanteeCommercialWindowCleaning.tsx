import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanteeCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Santee"
      citySlug="santee"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["santee"]}
    />
  );
};

export default SanteeCommercialWindowCleaning;
