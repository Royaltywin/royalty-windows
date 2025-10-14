import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FontanaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Fontana"
      citySlug="fontana"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["fontana"]}
    />
  );
};

export default FontanaWindowCleaning;
