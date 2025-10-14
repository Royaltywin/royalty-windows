import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SimiValleyWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Simi Valley"
      citySlug="simi-valley"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["simi-valley"]}
    />
  );
};

export default SimiValleyWindowCleaning;
