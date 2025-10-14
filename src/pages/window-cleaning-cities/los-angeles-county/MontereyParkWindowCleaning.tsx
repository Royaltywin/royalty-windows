import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontereyParkWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Monterey Park"
      citySlug="monterey-park"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["monterey-park"]}
    />
  );
};

export default MontereyParkWindowCleaning;
