import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const FullertonWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["fullerton"]}
      cityName="Fullerton"
      citySlug="fullerton"
    />
  );
};

export default FullertonWindowCleaning;
