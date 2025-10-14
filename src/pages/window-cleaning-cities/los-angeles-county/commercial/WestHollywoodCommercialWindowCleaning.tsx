import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WestHollywoodCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="West Hollywood"
      citySlug="west-hollywood"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["west-hollywood"]}
    />
  );
};

export default WestHollywoodCommercialWindowCleaning;
