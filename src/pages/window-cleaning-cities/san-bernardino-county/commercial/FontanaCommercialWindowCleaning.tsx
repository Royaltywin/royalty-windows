import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FontanaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Fontana"
      citySlug="fontana"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["fontana"]}
    />
  );
};

export default FontanaCommercialWindowCleaning;
