import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FillmoreWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Fillmore"
      citySlug="fillmore"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["fillmore"]}
    />
  );
};

export default FillmoreWindowCleaning;
