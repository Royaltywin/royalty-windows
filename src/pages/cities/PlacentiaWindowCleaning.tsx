import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const PlacentiaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["placentia"]}
      cityName="Placentia"
      citySlug="placentia"
    />
  );
};

export default PlacentiaWindowCleaning;
