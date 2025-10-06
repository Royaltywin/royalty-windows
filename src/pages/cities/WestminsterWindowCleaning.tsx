import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const WestminsterWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["westminster"]}
      cityName="Westminster"
      citySlug="westminster"
    />
  );
};

export default WestminsterWindowCleaning;
