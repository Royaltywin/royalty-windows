import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CamarilloWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Camarillo"
      citySlug="camarillo"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["camarillo"]}
    />
  );
};

export default CamarilloWindowCleaning;
