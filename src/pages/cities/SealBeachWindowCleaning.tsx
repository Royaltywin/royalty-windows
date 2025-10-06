import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const SealBeachWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["seal-beach"]}
      cityName="Seal Beach"
      citySlug="seal-beach"
    />
  );
};

export default SealBeachWindowCleaning;
