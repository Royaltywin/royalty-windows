import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanBernardinoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="San Bernardino"
      citySlug="san-bernardino"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["san-bernardino"]}
    />
  );
};

export default SanBernardinoWindowCleaning;
