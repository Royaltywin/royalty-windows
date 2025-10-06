import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LagunaNiguelWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["laguna-niguel"]}
      cityName="Laguna Niguel"
      citySlug="laguna-niguel"
    />
  );
};

export default LagunaNiguelWindowCleaning;
