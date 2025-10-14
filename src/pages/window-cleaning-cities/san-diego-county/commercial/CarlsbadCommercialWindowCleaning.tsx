import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CarlsbadCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Carlsbad"
      citySlug="carlsbad"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["carlsbad"]}
    />
  );
};

export default CarlsbadCommercialWindowCleaning;
