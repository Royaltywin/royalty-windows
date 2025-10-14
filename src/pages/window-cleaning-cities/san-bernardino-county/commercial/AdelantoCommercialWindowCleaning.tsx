import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AdelantoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Adelanto"
      citySlug="adelanto"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["adelanto"]}
    />
  );
};

export default AdelantoCommercialWindowCleaning;
