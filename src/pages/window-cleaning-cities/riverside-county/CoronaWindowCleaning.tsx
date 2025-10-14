import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Corona"
      citySlug="corona"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["corona"]}
    />
  );
};

export default CoronaWindowCleaning;
