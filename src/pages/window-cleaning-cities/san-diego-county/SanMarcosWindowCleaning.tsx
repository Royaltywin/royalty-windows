import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanMarcosWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="San Marcos"
      citySlug="san-marcos"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-marcos"]}
    />
  );
};

export default SanMarcosWindowCleaning;
