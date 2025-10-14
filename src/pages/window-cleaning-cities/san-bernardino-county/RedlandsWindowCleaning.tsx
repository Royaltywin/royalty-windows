import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RedlandsWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Redlands"
      citySlug="redlands"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["redlands"]}
    />
  );
};

export default RedlandsWindowCleaning;
