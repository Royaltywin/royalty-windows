import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const VillaParkWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["villa-park"]}
      cityName="Villa Park"
      citySlug="villa-park"
    />
  );
};

export default VillaParkWindowCleaning;
