import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ColtonWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Colton"
      citySlug="colton"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["colton"]}
    />
  );
};

export default ColtonWindowCleaning;
