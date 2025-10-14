import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PerrisCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Perris"
      citySlug="perris"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["perris"]}
    />
  );
};

export default PerrisCommercialWindowCleaning;
