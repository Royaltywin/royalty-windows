import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const CotoDeCazaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["coto-de-caza"]}
      cityName="Coto de Caza"
      citySlug="coto-de-caza"
    />
  );
};

export default CotoDeCazaWindowCleaning;
