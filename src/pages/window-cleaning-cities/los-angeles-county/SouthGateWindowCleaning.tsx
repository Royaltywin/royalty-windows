import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SouthGateWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="South Gate"
      citySlug="south-gate"
      countyName="Los Angeles County"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["south-gate"]}
    />
  );
};

export default SouthGateWindowCleaning;
