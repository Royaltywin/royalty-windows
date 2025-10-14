import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CathedralCityHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Cathedral City"
      citySlug="cathedral-city"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["cathedral-city"]}
    />
  );
};

export default CathedralCityHighRiseWindowCleaning;
