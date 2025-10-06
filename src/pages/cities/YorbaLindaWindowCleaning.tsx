import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const YorbaLindaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["yorba-linda"]}
      cityName="Yorba Linda"
      citySlug="yorba-linda"
    />
  );
};

export default YorbaLindaWindowCleaning;
