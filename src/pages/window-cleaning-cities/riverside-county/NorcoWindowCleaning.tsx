import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorcoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Norco"
      citySlug="norco"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["norco"]}
    />
  );
};

export default NorcoWindowCleaning;
