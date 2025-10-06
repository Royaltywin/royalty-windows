import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const BreaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["brea"]}
      cityName="Brea"
      citySlug="brea"
    />
  );
};

export default BreaWindowCleaning;
