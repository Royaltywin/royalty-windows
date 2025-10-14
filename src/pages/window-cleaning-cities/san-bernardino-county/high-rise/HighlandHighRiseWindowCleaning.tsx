import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HighlandHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Highland"
      citySlug="highland"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["highland"]}
    />
  );
};

export default HighlandHighRiseWindowCleaning;
