import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RanchoCucamongaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Rancho Cucamonga"
      citySlug="rancho-cucamonga"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["rancho-cucamonga"]}
    />
  );
};

export default RanchoCucamongaHighRiseWindowCleaning;
