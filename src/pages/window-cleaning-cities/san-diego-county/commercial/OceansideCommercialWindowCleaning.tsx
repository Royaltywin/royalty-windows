import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OceansideCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Oceanside"
      citySlug="oceanside"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["oceanside"]}
    />
  );
};

export default OceansideCommercialWindowCleaning;
