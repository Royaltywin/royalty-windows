import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LemonGroveHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Lemon Grove"
      citySlug="lemon-grove"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["lemon-grove"]}
    />
  );
};

export default LemonGroveHighRiseWindowCleaning;
