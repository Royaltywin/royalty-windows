import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PlacentiaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Placentia"
      citySlug="placentia"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["placentia"]}
    />
  );
};

export default PlacentiaHighRiseWindowCleaning;
