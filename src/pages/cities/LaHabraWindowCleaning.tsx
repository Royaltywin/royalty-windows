import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LaHabraWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["la-habra"]}
      cityName="La Habra"
      citySlug="la-habra"
    />
  );
};

export default LaHabraWindowCleaning;
