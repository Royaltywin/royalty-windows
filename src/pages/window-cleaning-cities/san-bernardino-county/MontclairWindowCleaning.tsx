import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontclairWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Montclair"
      citySlug="montclair"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["montclair"]}
    />
  );
};

export default MontclairWindowCleaning;
