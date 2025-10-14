import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CarlsbadWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Carlsbad"
      citySlug="carlsbad"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["carlsbad"]}
    />
  );
};

export default CarlsbadWindowCleaning;
