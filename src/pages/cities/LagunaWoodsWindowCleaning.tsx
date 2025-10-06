import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LagunaWoodsWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["laguna-woods"]}
      cityName="Laguna Woods"
      citySlug="laguna-woods"
    />
  );
};

export default LagunaWoodsWindowCleaning;
