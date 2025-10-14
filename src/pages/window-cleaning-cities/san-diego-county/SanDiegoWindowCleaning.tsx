import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanDiegoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="San Diego"
      citySlug="san-diego"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-diego"]}
    />
  );
};

export default SanDiegoWindowCleaning;
