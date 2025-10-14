import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YucaipaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Yucaipa"
      citySlug="yucaipa"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["yucaipa"]}
    />
  );
};

export default YucaipaHighRiseWindowCleaning;
