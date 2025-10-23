import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronaDelMarWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Corona Del Mar"
      citySlug="corona-del-mar"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["newport-beach"]}
    />
  );
};

export default CoronaDelMarWindowCleaning;
