import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LomaLindaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Loma Linda"
      citySlug="loma-linda"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["loma-linda"]}
    />
  );
};

export default LomaLindaWindowCleaning;
