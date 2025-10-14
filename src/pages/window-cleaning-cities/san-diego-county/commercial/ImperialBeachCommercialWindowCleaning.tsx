import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ImperialBeachCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Imperial Beach"
      citySlug="imperial-beach"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["imperial-beach"]}
    />
  );
};

export default ImperialBeachCommercialWindowCleaning;
