import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoHillsWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Chino Hills"
      citySlug="chino-hills"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino-hills"]}
    />
  );
};

export default ChinoHillsWindowCleaning;
