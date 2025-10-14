import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BanningWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Banning"
      citySlug="banning"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["banning"]}
    />
  );
};

export default BanningWindowCleaning;
