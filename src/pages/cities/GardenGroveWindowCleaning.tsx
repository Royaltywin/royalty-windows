import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const GardenGroveWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["garden-grove"]}
      cityName="Garden Grove"
      citySlug="garden-grove"
    />
  );
};

export default GardenGroveWindowCleaning;
