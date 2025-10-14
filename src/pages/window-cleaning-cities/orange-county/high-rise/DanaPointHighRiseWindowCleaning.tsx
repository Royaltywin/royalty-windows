import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DanaPointHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Dana Point"
      citySlug="dana-point"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["dana-point"]}
    />
  );
};

export default DanaPointHighRiseWindowCleaning;
