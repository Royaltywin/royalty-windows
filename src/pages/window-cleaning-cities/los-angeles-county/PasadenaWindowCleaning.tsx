import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PasadenaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Pasadena"
      citySlug="pasadena"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pasadena"]}
    />
  );
};

export default PasadenaWindowCleaning;
