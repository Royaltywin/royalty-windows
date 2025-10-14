import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TwentyninePalmsCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Twentynine Palms"
      citySlug="twentynine-palms"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["twentynine-palms"]}
    />
  );
};

export default TwentyninePalmsCommercialWindowCleaning;
