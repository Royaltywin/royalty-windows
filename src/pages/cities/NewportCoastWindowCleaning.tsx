import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const NewportCoastWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["newport-coast"]}
      cityName="Newport Coast"
      citySlug="newport-coast"
    />
  );
};

export default NewportCoastWindowCleaning;
