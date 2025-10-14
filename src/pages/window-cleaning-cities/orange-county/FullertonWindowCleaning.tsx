import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FullertonWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Fullerton"
      citySlug="fullerton"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fullerton"]}
    />
  );
};

export default FullertonWindowCleaning;
