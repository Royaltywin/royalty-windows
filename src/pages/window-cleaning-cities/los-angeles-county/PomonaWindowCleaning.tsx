import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PomonaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Pomona"
      citySlug="pomona"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pomona"]}
    />
  );
};

export default PomonaWindowCleaning;
