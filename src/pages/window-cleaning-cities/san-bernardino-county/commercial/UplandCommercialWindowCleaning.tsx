import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const UplandCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Upland"
      citySlug="upland"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["upland"]}
    />
  );
};

export default UplandCommercialWindowCleaning;
