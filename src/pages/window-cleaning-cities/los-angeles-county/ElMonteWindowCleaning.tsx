import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElMonteWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="El Monte"
      citySlug="el-monte"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["el-monte"]}
    />
  );
};

export default ElMonteWindowCleaning;
