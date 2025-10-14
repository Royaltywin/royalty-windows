import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FallbrookWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Fallbrook"
      citySlug="fallbrook"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["fallbrook"]}
    />
  );
};

export default FallbrookWindowCleaning;
