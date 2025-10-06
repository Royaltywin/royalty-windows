import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LosFloresWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["los-flores"]}
      cityName="Los Flores"
      citySlug="los-flores"
    />
  );
};

export default LosFloresWindowCleaning;
