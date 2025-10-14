import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FallbrookCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Fallbrook"
      citySlug="fallbrook"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["fallbrook"]}
    />
  );
};

export default FallbrookCommercialWindowCleaning;
