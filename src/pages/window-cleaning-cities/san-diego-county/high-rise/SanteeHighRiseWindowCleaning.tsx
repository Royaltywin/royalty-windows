import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanteeHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Santee"
      citySlug="santee"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["santee"]}
    />
  );
};

export default SanteeHighRiseWindowCleaning;
