import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const HuntingtonBeachWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["huntington-beach"]}
      cityName="Huntington Beach"
      citySlug="huntington-beach"
    />
  );
};

export default HuntingtonBeachWindowCleaning;
