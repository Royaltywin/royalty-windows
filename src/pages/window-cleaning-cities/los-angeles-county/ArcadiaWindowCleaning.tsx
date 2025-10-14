import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ArcadiaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Arcadia"
      citySlug="arcadia"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["arcadia"]}
    />
  );
};

export default ArcadiaWindowCleaning;
