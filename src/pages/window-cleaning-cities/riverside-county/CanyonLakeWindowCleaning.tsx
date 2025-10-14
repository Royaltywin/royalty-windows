import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CanyonLakeWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Canyon Lake"
      citySlug="canyon-lake"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["canyon-lake"]}
    />
  );
};

export default CanyonLakeWindowCleaning;
