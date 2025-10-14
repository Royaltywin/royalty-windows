import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IrvineHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Irvine"
      citySlug="irvine"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["irvine"]}
    />
  );
};

export default IrvineHighRiseWindowCleaning;
