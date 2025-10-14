import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SantaMonicaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Santa Monica"
      citySlug="santa-monica"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["santa-monica"]}
    />
  );
};

export default SantaMonicaHighRiseWindowCleaning;
