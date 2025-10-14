import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DelMarHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Del Mar"
      citySlug="del-mar"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["del-mar"]}
    />
  );
};

export default DelMarHighRiseWindowCleaning;
