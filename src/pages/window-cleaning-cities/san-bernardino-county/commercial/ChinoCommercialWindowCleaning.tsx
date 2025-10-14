import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Chino"
      citySlug="chino"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino"]}
    />
  );
};

export default ChinoCommercialWindowCleaning;
