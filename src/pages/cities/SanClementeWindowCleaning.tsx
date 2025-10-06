import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const SanClementeWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["san-clemente"]}
      cityName="San Clemente"
      citySlug="san-clemente"
    />
  );
};

export default SanClementeWindowCleaning;
