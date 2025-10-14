import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BigBearLakeWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Big Bear Lake"
      citySlug="big-bear-lake"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["big-bear-lake"]}
    />
  );
};

export default BigBearLakeWindowCleaning;
