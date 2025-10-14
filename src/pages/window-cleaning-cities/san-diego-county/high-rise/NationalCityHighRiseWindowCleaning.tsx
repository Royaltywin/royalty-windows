import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NationalCityHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="National City"
      citySlug="national-city"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["national-city"]}
    />
  );
};

export default NationalCityHighRiseWindowCleaning;
