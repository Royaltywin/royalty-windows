import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AdelantoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Adelanto"
      citySlug="adelanto"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["adelanto"]}
    />
  );
};

export default AdelantoHighRiseWindowCleaning;
