import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeForestHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Lake Forest"
      citySlug="lake-forest"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["lake-forest"]}
    />
  );
};

export default LakeForestHighRiseWindowCleaning;
