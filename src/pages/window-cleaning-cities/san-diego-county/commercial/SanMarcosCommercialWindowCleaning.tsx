import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanMarcosCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="San Marcos"
      citySlug="san-marcos"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-marcos"]}
    />
  );
};

export default SanMarcosCommercialWindowCleaning;
