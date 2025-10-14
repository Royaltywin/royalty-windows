import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElCajonWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="El Cajon"
      citySlug="el-cajon"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["el-cajon"]}
    />
  );
};

export default ElCajonWindowCleaning;
