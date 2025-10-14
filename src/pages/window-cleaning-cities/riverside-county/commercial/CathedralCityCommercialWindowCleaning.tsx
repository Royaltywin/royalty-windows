import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CathedralCityCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Cathedral City"
      citySlug="cathedral-city"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["cathedral-city"]}
    />
  );
};

export default CathedralCityCommercialWindowCleaning;
