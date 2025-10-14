import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HighlandCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Highland"
      citySlug="highland"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["highland"]}
    />
  );
};

export default HighlandCommercialWindowCleaning;
