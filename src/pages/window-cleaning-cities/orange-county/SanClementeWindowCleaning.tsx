import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanClementeWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="San Clemente"
      citySlug="san-clemente"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["san-clemente"]}
    />
  );
};

export default SanClementeWindowCleaning;
