import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HesperiaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Hesperia"
      citySlug="hesperia"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["hesperia"]}
    />
  );
};

export default HesperiaWindowCleaning;
