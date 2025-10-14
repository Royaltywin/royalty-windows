import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DelMarWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Del Mar"
      citySlug="del-mar"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["del-mar"]}
    />
  );
};

export default DelMarWindowCleaning;
