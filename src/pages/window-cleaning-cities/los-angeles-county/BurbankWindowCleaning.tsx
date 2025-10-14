import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BurbankWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Burbank"
      citySlug="burbank"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["burbank"]}
    />
  );
};

export default BurbankWindowCleaning;
