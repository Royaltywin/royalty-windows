import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PlacentiaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Placentia"
      citySlug="placentia"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["placentia"]}
    />
  );
};

export default PlacentiaCommercialWindowCleaning;
