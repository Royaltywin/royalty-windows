import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WildomarHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Wildomar"
      citySlug="wildomar"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["wildomar"]}
    />
  );
};

export default WildomarHighRiseWindowCleaning;
