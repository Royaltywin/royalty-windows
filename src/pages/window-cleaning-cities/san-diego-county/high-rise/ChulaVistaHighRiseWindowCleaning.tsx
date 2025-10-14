import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChulaVistaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Chula Vista"
      citySlug="chula-vista"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["chula-vista"]}
    />
  );
};

export default ChulaVistaHighRiseWindowCleaning;
