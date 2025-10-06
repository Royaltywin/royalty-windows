import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const RanchoSantaMargaritaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["rancho-santa-margarita"]}
      cityName="Rancho Santa Margarita"
      citySlug="rancho-santa-margarita"
    />
  );
};

export default RanchoSantaMargaritaWindowCleaning;
