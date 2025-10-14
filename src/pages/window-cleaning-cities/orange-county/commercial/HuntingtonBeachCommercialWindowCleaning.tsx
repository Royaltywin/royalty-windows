import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HuntingtonBeachCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Huntington Beach"
      citySlug="huntington-beach"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["huntington-beach"]}
    />
  );
};

export default HuntingtonBeachCommercialWindowCleaning;
