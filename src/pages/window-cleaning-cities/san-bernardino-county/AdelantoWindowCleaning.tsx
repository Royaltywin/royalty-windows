import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AdelantoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Adelanto"
      citySlug="adelanto"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["adelanto"]}
    />
  );
};

export default AdelantoWindowCleaning;
