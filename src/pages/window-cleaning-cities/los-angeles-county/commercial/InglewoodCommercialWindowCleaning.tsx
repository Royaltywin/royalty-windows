import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const InglewoodCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Inglewood"
      citySlug="inglewood"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["inglewood"]}
    />
  );
};

export default InglewoodCommercialWindowCleaning;
