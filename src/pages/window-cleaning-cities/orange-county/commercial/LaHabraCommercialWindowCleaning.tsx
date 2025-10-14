import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaHabraCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="La Habra"
      citySlug="la-habra"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["la-habra"]}
    />
  );
};

export default LaHabraCommercialWindowCleaning;
