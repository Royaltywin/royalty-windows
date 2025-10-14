import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WhittierWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Whittier"
      citySlug="whittier"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["whittier"]}
    />
  );
};

export default WhittierWindowCleaning;
