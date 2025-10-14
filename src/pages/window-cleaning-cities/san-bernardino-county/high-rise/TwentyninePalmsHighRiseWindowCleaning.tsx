import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TwentyninePalmsHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Twentynine Palms"
      citySlug="twentynine-palms"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["twentynine-palms"]}
    />
  );
};

export default TwentyninePalmsHighRiseWindowCleaning;
