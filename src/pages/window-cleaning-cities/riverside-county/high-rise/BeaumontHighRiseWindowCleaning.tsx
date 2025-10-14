import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BeaumontHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Beaumont"
      citySlug="beaumont"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["beaumont"]}
    />
  );
};

export default BeaumontHighRiseWindowCleaning;
