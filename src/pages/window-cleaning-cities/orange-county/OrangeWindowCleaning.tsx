import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OrangeWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Orange"
      citySlug="orange"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["orange"]}
    />
  );
};

export default OrangeWindowCleaning;
