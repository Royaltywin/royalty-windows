import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TustinWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Tustin"
      citySlug="tustin"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["tustin"]}
    />
  );
};

export default TustinWindowCleaning;
