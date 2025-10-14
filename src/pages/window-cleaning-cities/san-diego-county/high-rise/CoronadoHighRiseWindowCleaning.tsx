import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronadoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Coronado"
      citySlug="coronado"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["coronado"]}
    />
  );
};

export default CoronadoHighRiseWindowCleaning;
