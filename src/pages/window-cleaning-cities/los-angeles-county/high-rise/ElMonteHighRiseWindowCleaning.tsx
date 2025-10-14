import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElMonteHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="El Monte"
      citySlug="el-monte"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["el-monte"]}
    />
  );
};

export default ElMonteHighRiseWindowCleaning;
