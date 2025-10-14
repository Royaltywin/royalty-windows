import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanteeWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Santee"
      citySlug="santee"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["santee"]}
    />
  );
};

export default SanteeWindowCleaning;
