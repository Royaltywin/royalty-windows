import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CathedralCityWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Cathedral City"
      citySlug="cathedral-city"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["cathedral-city"]}
    />
  );
};

export default CathedralCityWindowCleaning;
