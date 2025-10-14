import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DowneyWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Downey"
      citySlug="downey"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["downey"]}
    />
  );
};

export default DowneyWindowCleaning;
