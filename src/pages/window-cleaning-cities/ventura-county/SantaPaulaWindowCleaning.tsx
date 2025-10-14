import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaPaulaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Santa Paula"
      citySlug="santa-paula"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["santa-paula"]}
    />
  );
};

export default SantaPaulaWindowCleaning;
