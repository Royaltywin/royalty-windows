import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VenturaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Ventura"
      citySlug="ventura"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ventura"]}
    />
  );
};

export default VenturaWindowCleaning;
