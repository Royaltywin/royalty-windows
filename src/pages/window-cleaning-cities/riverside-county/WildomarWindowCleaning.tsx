import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WildomarWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Wildomar"
      citySlug="wildomar"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["wildomar"]}
    />
  );
};

export default WildomarWindowCleaning;
