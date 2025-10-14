import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RiversideWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Riverside"
      citySlug="riverside"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["riverside"]}
    />
  );
};

export default RiversideWindowCleaning;
