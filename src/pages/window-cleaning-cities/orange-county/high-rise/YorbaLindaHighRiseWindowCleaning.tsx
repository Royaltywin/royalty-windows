import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YorbaLindaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Yorba Linda"
      citySlug="yorba-linda"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["yorba-linda"]}
    />
  );
};

export default YorbaLindaHighRiseWindowCleaning;
