import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LakeForestWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["lake-forest"]}
      cityName="Lake Forest"
      citySlug="lake-forest"
    />
  );
};

export default LakeForestWindowCleaning;
