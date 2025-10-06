import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LagunaBeachWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["laguna-beach"]}
      cityName="Laguna Beach"
      citySlug="laguna-beach"
    />
  );
};

export default LagunaBeachWindowCleaning;
