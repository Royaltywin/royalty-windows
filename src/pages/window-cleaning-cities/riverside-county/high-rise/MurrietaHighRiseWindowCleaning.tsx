import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MurrietaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Murrieta"
      citySlug="murrieta"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["murrieta"]}
    />
  );
};

export default MurrietaHighRiseWindowCleaning;
