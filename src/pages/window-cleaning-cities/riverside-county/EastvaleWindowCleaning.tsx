import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EastvaleWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Eastvale"
      citySlug="eastvale"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["eastvale"]}
    />
  );
};

export default EastvaleWindowCleaning;
