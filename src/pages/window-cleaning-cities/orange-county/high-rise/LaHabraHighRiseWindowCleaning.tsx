import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaHabraHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="La Habra"
      citySlug="la-habra"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["la-habra"]}
    />
  );
};

export default LaHabraHighRiseWindowCleaning;
