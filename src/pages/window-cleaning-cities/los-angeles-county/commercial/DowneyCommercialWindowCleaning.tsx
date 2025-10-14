import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DowneyCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Downey"
      citySlug="downey"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["downey"]}
    />
  );
};

export default DowneyCommercialWindowCleaning;
