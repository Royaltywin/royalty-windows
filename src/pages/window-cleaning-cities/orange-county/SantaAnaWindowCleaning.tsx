import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaAnaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Santa Ana"
      citySlug="santa-ana"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["santa-ana"]}
    />
  );
};

export default SantaAnaWindowCleaning;
