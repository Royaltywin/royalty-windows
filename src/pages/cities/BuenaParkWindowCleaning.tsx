import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const BuenaParkWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["buena-park"]}
      cityName="Buena Park"
      citySlug="buena-park"
    />
  );
};

export default BuenaParkWindowCleaning;
