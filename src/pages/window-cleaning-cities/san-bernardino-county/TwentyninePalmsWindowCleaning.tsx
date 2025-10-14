import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TwentyninePalmsWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Twentynine Palms"
      citySlug="twentynine-palms"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["twentynine-palms"]}
    />
  );
};

export default TwentyninePalmsWindowCleaning;
