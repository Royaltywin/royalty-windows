import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IrvineWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Irvine"
      citySlug="irvine"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["irvine"]}
    />
  );
};

export default IrvineWindowCleaning;
