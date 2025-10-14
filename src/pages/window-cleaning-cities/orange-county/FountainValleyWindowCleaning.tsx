import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FountainValleyWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Fountain Valley"
      citySlug="fountain-valley"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fountain-valley"]}
    />
  );
};

export default FountainValleyWindowCleaning;
