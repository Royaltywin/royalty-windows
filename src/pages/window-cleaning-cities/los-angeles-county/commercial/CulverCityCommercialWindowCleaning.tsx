import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CulverCityCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Culver City"
      citySlug="culver-city"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["culver-city"]}
    />
  );
};

export default CulverCityCommercialWindowCleaning;
