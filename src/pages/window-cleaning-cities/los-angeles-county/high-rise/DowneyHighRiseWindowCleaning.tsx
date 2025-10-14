import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DowneyHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Downey"
      citySlug="downey"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["downey"]}
    />
  );
};

export default DowneyHighRiseWindowCleaning;
