import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EastvaleHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Eastvale"
      citySlug="eastvale"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["eastvale"]}
    />
  );
};

export default EastvaleHighRiseWindowCleaning;
