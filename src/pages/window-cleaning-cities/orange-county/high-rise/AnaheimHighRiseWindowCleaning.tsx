import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AnaheimHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Anaheim"
      citySlug="anaheim"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["anaheim"]}
    />
  );
};

export default AnaheimHighRiseWindowCleaning;
