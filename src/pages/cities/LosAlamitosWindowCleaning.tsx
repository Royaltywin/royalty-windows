import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LosAlamitosWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["los-alamitos"]}
      cityName="Los Alamitos"
      citySlug="los-alamitos"
    />
  );
};

export default LosAlamitosWindowCleaning;
