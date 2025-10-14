import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OceansideWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Oceanside"
      citySlug="oceanside"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["oceanside"]}
    />
  );
};

export default OceansideWindowCleaning;
