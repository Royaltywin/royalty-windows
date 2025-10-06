import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const CoronaDelMarWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["corona-del-mar"]}
      cityName="Corona Del Mar"
      citySlug="corona-del-mar"
    />
  );
};

export default CoronaDelMarWindowCleaning;
