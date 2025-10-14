import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaMonicaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Santa Monica"
      citySlug="santa-monica"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["santa-monica"]}
    />
  );
};

export default SantaMonicaWindowCleaning;
