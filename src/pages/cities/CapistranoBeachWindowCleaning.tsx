import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const CapistranoBeachWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["capistrano-beach"]}
      cityName="Capistrano Beach"
      citySlug="capistrano-beach"
    />
  );
};

export default CapistranoBeachWindowCleaning;
