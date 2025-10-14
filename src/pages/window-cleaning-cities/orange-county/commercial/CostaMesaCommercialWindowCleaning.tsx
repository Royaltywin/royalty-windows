import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CostaMesaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Costa Mesa"
      citySlug="costa-mesa"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["costa-mesa"]}
    />
  );
};

export default CostaMesaCommercialWindowCleaning;
