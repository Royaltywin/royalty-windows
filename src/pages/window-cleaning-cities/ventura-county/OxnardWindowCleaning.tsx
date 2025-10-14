import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OxnardWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Oxnard"
      citySlug="oxnard"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["oxnard"]}
    />
  );
};

export default OxnardWindowCleaning;
