import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DanaPointCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Dana Point"
      citySlug="dana-point"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["dana-point"]}
    />
  );
};

export default DanaPointCommercialWindowCleaning;
