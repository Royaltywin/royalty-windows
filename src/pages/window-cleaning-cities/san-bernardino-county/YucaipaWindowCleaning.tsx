import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YucaipaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Yucaipa"
      citySlug="yucaipa"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["yucaipa"]}
    />
  );
};

export default YucaipaWindowCleaning;
