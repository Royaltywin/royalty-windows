import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlhambraHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Alhambra"
      citySlug="alhambra"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["alhambra"]}
    />
  );
};

export default AlhambraHighRiseWindowCleaning;
