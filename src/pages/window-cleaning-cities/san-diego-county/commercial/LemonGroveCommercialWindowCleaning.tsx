import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LemonGroveCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Lemon Grove"
      citySlug="lemon-grove"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["lemon-grove"]}
    />
  );
};

export default LemonGroveCommercialWindowCleaning;
