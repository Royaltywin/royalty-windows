import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YucaipaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Yucaipa"
      citySlug="yucaipa"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["yucaipa"]}
    />
  );
};

export default YucaipaCommercialWindowCleaning;
