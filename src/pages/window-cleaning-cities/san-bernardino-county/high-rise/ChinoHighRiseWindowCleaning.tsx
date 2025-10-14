import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Chino"
      citySlug="chino"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino"]}
    />
  );
};

export default ChinoHighRiseWindowCleaning;
