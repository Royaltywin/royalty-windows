import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RiversideHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Riverside"
      citySlug="riverside"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["riverside"]}
    />
  );
};

export default RiversideHighRiseWindowCleaning;
