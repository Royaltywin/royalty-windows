import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const TrabucoCanyonWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["trabuco-canyon"]}
      cityName="Trabuco Canyon"
      citySlug="trabuco-canyon"
    />
  );
};

export default TrabucoCanyonWindowCleaning;
