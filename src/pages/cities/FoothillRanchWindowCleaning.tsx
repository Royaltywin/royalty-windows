import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const FoothillRanchWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["foothill-ranch"]}
      cityName="Foothill Ranch"
      citySlug="foothill-ranch"
    />
  );
};

export default FoothillRanchWindowCleaning;
