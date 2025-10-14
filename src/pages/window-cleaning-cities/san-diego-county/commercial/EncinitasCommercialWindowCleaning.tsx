import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EncinitasCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Encinitas"
      citySlug="encinitas"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["encinitas"]}
    />
  );
};

export default EncinitasCommercialWindowCleaning;
