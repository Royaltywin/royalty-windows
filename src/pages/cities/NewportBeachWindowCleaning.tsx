import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const NewportBeachWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["newport-beach"]}
      cityName="Newport Beach"
      citySlug="newport-beach"
    />
  );
};

export default NewportBeachWindowCleaning;
