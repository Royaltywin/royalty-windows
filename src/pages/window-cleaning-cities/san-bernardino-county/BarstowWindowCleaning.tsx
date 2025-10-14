import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BarstowWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Barstow"
      citySlug="barstow"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["barstow"]}
    />
  );
};

export default BarstowWindowCleaning;
