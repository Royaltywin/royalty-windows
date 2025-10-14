import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HesperiaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Hesperia"
      citySlug="hesperia"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["hesperia"]}
    />
  );
};

export default HesperiaHighRiseWindowCleaning;
