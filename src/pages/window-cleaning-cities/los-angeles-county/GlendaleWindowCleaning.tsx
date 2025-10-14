import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GlendaleWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Glendale"
      citySlug="glendale"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["glendale"]}
    />
  );
};

export default GlendaleWindowCleaning;
