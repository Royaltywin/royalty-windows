import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const TalegaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["talega"]}
      cityName="Talega"
      citySlug="talega"
    />
  );
};

export default TalegaWindowCleaning;
