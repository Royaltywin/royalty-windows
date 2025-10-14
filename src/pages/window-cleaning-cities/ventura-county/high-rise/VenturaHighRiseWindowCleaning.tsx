import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VenturaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Ventura"
      citySlug="ventura"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ventura"]}
    />
  );
};

export default VenturaHighRiseWindowCleaning;
