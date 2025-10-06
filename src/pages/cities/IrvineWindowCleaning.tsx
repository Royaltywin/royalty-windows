import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const IrvineWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["irvine"]}
      cityName="Irvine"
      citySlug="irvine"
    />
  );
};

export default IrvineWindowCleaning;
