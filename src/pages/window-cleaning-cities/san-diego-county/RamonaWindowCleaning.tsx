import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RamonaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Ramona"
      citySlug="ramona"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["ramona"]}
    />
  );
};

export default RamonaWindowCleaning;
