import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const LaPalmaWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["la-palma"]}
      cityName="La Palma"
      citySlug="la-palma"
    />
  );
};

export default LaPalmaWindowCleaning;
