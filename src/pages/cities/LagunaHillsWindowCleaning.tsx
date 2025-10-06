import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LagunaHillsWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["laguna-hills"]}
      cityName="Laguna Hills"
      citySlug="laguna-hills"
    />
  );
};

export default LagunaHillsWindowCleaning;
