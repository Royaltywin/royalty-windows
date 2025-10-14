import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VistaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Vista"
      citySlug="vista"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["vista"]}
    />
  );
};

export default VistaWindowCleaning;
