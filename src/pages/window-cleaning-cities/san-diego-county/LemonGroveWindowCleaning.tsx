import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LemonGroveWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Lemon Grove"
      citySlug="lemon-grove"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["lemon-grove"]}
    />
  );
};

export default LemonGroveWindowCleaning;
