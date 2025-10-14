import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanDiegoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="San Diego"
      citySlug="san-diego"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-diego"]}
    />
  );
};

export default SanDiegoCommercialWindowCleaning;
