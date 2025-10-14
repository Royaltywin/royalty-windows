import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AnaheimWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Anaheim"
      citySlug="anaheim"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["anaheim"]}
    />
  );
};

export default AnaheimWindowCleaning;
