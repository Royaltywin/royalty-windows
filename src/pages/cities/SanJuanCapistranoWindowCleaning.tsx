import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const SanJuanCapistranoWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["san-juan-capistrano"]}
      cityName="San Juan Capistrano"
      citySlug="san-juan-capistrano"
    />
  );
};

export default SanJuanCapistranoWindowCleaning;
