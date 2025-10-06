import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const StantonWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["stanton"]}
      cityName="Stanton"
      citySlug="stanton"
    />
  );
};

export default StantonWindowCleaning;
