import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const SantaAnaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["santa-ana"]}
      cityName="Santa Ana"
      citySlug="santa-ana"
    />
  );
};

export default SantaAnaWindowCleaning;
