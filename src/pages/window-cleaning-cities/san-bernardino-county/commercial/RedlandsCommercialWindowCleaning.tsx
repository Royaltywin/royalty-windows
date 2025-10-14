import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RedlandsCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Redlands"
      citySlug="redlands"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["redlands"]}
    />
  );
};

export default RedlandsCommercialWindowCleaning;
