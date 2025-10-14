import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Chino"
      citySlug="chino"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino"]}
    />
  );
};

export default ChinoWindowCleaning;
