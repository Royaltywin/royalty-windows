import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChulaVistaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Chula Vista"
      citySlug="chula-vista"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["chula-vista"]}
    />
  );
};

export default ChulaVistaWindowCleaning;
