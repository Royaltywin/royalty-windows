import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DanaPointWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Dana Point"
      citySlug="dana-point"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["dana-point"]}
    />
  );
};

export default DanaPointWindowCleaning;
