import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const FountainValleyWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["fountain-valley"]}
      cityName="Fountain Valley"
      citySlug="fountain-valley"
    />
  );
};

export default FountainValleyWindowCleaning;
