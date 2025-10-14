import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const UplandWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Upland"
      citySlug="upland"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["upland"]}
    />
  );
};

export default UplandWindowCleaning;
