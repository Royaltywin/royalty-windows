import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoHillsHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Chino Hills"
      citySlug="chino-hills"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino-hills"]}
    />
  );
};

export default ChinoHillsHighRiseWindowCleaning;
