import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElCajonHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="El Cajon"
      citySlug="el-cajon"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["el-cajon"]}
    />
  );
};

export default ElCajonHighRiseWindowCleaning;
