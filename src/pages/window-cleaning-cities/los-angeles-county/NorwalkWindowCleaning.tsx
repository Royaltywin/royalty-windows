import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorwalkWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Norwalk"
      citySlug="norwalk"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["norwalk"]}
    />
  );
};

export default NorwalkWindowCleaning;
