import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HesperiaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Hesperia"
      citySlug="hesperia"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["hesperia"]}
    />
  );
};

export default HesperiaCommercialWindowCleaning;
