import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TustinCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Tustin"
      citySlug="tustin"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["tustin"]}
    />
  );
};

export default TustinCommercialWindowCleaning;
