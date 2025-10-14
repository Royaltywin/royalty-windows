import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OjaiWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Ojai"
      citySlug="ojai"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ojai"]}
    />
  );
};

export default OjaiWindowCleaning;
