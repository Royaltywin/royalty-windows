import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlisoViejoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Aliso Viejo"
      citySlug="aliso-viejo"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["aliso-viejo"]}
    />
  );
};

export default AlisoViejoWindowCleaning;
