import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VictorvilleWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Victorville"
      citySlug="victorville"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["victorville"]}
    />
  );
};

export default VictorvilleWindowCleaning;
