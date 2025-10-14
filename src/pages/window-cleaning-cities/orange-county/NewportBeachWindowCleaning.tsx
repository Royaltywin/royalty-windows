import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NewportBeachWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Newport Beach"
      citySlug="newport-beach"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["newport-beach"]}
    />
  );
};

export default NewportBeachWindowCleaning;
