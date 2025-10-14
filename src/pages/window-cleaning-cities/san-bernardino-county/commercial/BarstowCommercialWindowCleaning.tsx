import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BarstowCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Barstow"
      citySlug="barstow"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["barstow"]}
    />
  );
};

export default BarstowCommercialWindowCleaning;
