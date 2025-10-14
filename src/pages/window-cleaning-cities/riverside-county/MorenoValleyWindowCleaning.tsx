import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MorenoValleyWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Moreno Valley"
      citySlug="moreno-valley"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["moreno-valley"]}
    />
  );
};

export default MorenoValleyWindowCleaning;
