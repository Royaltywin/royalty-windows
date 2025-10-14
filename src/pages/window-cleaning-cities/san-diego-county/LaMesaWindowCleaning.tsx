import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaMesaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="La Mesa"
      citySlug="la-mesa"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["la-mesa"]}
    />
  );
};

export default LaMesaWindowCleaning;
