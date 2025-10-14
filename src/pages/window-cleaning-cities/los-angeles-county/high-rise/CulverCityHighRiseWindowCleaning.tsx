import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CulverCityHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Culver City"
      citySlug="culver-city"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["culver-city"]}
    />
  );
};

export default CulverCityHighRiseWindowCleaning;
