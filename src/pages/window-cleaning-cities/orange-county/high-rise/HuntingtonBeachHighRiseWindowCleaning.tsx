import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HuntingtonBeachHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Huntington Beach"
      citySlug="huntington-beach"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["huntington-beach"]}
    />
  );
};

export default HuntingtonBeachHighRiseWindowCleaning;
