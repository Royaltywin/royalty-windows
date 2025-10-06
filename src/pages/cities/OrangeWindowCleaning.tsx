import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const OrangeWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["orange"]}
      cityName="Orange"
      citySlug="orange"
    />
  );
};

export default OrangeWindowCleaning;
