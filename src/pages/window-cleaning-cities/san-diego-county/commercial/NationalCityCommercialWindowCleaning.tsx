import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NationalCityCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="National City"
      citySlug="national-city"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["national-city"]}
    />
  );
};

export default NationalCityCommercialWindowCleaning;
