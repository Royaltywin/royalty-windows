import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NationalCityWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="National City"
      citySlug="national-city"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["national-city"]}
    />
  );
};

export default NationalCityWindowCleaning;
