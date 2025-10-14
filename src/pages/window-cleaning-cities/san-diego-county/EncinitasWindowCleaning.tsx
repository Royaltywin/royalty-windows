import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EncinitasWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Encinitas"
      citySlug="encinitas"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["encinitas"]}
    />
  );
};

export default EncinitasWindowCleaning;
