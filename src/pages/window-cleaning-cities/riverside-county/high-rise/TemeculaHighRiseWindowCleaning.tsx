import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TemeculaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Temecula"
      citySlug="temecula"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["temecula"]}
    />
  );
};

export default TemeculaHighRiseWindowCleaning;
