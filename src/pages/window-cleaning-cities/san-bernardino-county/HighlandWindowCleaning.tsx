import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HighlandWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Highland"
      citySlug="highland"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["highland"]}
    />
  );
};

export default HighlandWindowCleaning;
