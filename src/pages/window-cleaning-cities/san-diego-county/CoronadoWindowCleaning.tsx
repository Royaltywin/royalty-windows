import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronadoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Coronado"
      citySlug="coronado"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["coronado"]}
    />
  );
};

export default CoronadoWindowCleaning;
