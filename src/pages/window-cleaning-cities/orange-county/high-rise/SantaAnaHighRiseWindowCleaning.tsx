import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaAnaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Santa Ana"
      citySlug="santa-ana"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["santa-ana"]}
    />
  );
};

export default SantaAnaHighRiseWindowCleaning;
