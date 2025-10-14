import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YorbaLindaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Yorba Linda"
      citySlug="yorba-linda"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["yorba-linda"]}
    />
  );
};

export default YorbaLindaWindowCleaning;
