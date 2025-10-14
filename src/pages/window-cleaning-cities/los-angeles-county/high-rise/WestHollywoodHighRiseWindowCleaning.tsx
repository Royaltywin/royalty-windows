import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WestHollywoodHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="West Hollywood"
      citySlug="west-hollywood"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["west-hollywood"]}
    />
  );
};

export default WestHollywoodHighRiseWindowCleaning;
