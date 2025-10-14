import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LomaLindaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Loma Linda"
      citySlug="loma-linda"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["loma-linda"]}
    />
  );
};

export default LomaLindaHighRiseWindowCleaning;
