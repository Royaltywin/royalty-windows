import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ThousandOaksHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Thousand Oaks"
      citySlug="thousand-oaks"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["thousand-oaks"]}
    />
  );
};

export default ThousandOaksHighRiseWindowCleaning;
