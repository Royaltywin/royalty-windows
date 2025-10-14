import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WestHollywoodWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="West Hollywood"
      citySlug="west-hollywood"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["west-hollywood"]}
    />
  );
};

export default WestHollywoodWindowCleaning;
