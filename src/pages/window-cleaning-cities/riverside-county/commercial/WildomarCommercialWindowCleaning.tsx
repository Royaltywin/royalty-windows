import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WildomarCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Wildomar"
      citySlug="wildomar"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["wildomar"]}
    />
  );
};

export default WildomarCommercialWindowCleaning;
