import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FontanaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Fontana"
      citySlug="fontana"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["fontana"]}
    />
  );
};

export default FontanaHighRiseWindowCleaning;
