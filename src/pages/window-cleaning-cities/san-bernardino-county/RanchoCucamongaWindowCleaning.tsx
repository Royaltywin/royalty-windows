import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RanchoCucamongaWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Rancho Cucamonga"
      citySlug="rancho-cucamonga"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["rancho-cucamonga"]}
    />
  );
};

export default RanchoCucamongaWindowCleaning;
