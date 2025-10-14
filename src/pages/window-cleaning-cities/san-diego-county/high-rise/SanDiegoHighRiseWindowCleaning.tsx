import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanDiegoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="San Diego"
      citySlug="san-diego"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-diego"]}
    />
  );
};

export default SanDiegoHighRiseWindowCleaning;
