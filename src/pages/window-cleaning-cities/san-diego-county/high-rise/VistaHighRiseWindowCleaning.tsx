import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VistaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Vista"
      citySlug="vista"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["vista"]}
    />
  );
};

export default VistaHighRiseWindowCleaning;
