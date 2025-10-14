import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RamonaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Ramona"
      citySlug="ramona"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["ramona"]}
    />
  );
};

export default RamonaHighRiseWindowCleaning;
