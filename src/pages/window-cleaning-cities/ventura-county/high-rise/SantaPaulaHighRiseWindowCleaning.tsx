import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaPaulaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Santa Paula"
      citySlug="santa-paula"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["santa-paula"]}
    />
  );
};

export default SantaPaulaHighRiseWindowCleaning;
