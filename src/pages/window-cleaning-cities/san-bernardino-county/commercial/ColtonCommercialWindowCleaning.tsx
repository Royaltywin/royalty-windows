import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ColtonCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Colton"
      citySlug="colton"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["colton"]}
    />
  );
};

export default ColtonCommercialWindowCleaning;
