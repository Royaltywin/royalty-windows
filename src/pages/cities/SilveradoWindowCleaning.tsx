import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const SilveradoWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["silverado"]}
      cityName="Silverado"
      citySlug="silverado"
    />
  );
};

export default SilveradoWindowCleaning;
