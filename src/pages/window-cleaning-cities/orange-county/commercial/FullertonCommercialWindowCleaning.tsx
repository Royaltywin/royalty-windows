import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FullertonCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Fullerton"
      citySlug="fullerton"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fullerton"]}
    />
  );
};

export default FullertonCommercialWindowCleaning;
