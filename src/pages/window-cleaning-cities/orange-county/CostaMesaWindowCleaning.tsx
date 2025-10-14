import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CostaMesaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Costa Mesa"
      citySlug="costa-mesa"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["costa-mesa"]}
    />
  );
};

export default CostaMesaWindowCleaning;
