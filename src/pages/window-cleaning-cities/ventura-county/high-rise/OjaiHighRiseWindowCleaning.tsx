import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OjaiHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Ojai"
      citySlug="ojai"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ojai"]}
    />
  );
};

export default OjaiHighRiseWindowCleaning;
