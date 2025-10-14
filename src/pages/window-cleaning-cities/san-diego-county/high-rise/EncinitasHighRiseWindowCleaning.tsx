import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EncinitasHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Encinitas"
      citySlug="encinitas"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["encinitas"]}
    />
  );
};

export default EncinitasHighRiseWindowCleaning;
