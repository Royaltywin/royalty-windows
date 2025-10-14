import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OntarioHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Ontario"
      citySlug="ontario"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["ontario"]}
    />
  );
};

export default OntarioHighRiseWindowCleaning;
