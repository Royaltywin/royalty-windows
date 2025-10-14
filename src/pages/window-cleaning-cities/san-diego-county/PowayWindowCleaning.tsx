import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PowayWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Poway"
      citySlug="poway"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["poway"]}
    />
  );
};

export default PowayWindowCleaning;
