import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BarstowHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Barstow"
      citySlug="barstow"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["barstow"]}
    />
  );
};

export default BarstowHighRiseWindowCleaning;
