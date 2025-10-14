import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HemetWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Hemet"
      citySlug="hemet"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["hemet"]}
    />
  );
};

export default HemetWindowCleaning;
