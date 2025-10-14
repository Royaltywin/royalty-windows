import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ImperialBeachHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Imperial Beach"
      citySlug="imperial-beach"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["imperial-beach"]}
    />
  );
};

export default ImperialBeachHighRiseWindowCleaning;
