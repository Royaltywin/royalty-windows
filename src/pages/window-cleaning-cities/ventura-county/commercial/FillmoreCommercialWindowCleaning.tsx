import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FillmoreCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Fillmore"
      citySlug="fillmore"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["fillmore"]}
    />
  );
};

export default FillmoreCommercialWindowCleaning;
