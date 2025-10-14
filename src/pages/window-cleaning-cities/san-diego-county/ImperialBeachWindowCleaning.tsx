import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ImperialBeachWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Imperial Beach"
      citySlug="imperial-beach"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["imperial-beach"]}
    />
  );
};

export default ImperialBeachWindowCleaning;
