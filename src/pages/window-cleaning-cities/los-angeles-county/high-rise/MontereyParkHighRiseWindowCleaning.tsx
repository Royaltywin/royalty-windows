import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontereyParkHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Monterey Park"
      citySlug="monterey-park"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["monterey-park"]}
    />
  );
};

export default MontereyParkHighRiseWindowCleaning;
