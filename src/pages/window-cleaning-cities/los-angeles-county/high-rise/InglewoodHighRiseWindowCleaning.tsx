import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const InglewoodHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Inglewood"
      citySlug="inglewood"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["inglewood"]}
    />
  );
};

export default InglewoodHighRiseWindowCleaning;
