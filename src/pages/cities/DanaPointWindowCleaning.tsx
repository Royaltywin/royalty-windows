import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const DanaPointWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["dana-point"]}
      cityName="Dana Point"
      citySlug="dana-point"
    />
  );
};

export default DanaPointWindowCleaning;
