import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const TustinWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["tustin"]}
      cityName="Tustin"
      citySlug="tustin"
    />
  );
};

export default TustinWindowCleaning;
