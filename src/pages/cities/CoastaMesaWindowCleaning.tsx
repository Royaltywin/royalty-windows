import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const CoastaMesaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["costa-mesa"]}
      cityName="Costa Mesa"
      citySlug="costa-mesa"
    />
  );
};

export default CoastaMesaWindowCleaning;
