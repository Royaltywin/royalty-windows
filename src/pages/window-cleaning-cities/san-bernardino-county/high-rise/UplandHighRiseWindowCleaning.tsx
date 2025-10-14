import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const UplandHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Upland"
      citySlug="upland"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["upland"]}
    />
  );
};

export default UplandHighRiseWindowCleaning;
