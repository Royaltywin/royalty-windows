import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeElsinoreHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Lake Elsinore"
      citySlug="lake-elsinore"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["lake-elsinore"]}
    />
  );
};

export default LakeElsinoreHighRiseWindowCleaning;
