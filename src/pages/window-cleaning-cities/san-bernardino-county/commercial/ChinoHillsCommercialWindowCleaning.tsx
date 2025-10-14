import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoHillsCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Chino Hills"
      citySlug="chino-hills"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino-hills"]}
    />
  );
};

export default ChinoHillsCommercialWindowCleaning;
