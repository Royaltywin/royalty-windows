import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaMesaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="La Mesa"
      citySlug="la-mesa"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["la-mesa"]}
    />
  );
};

export default LaMesaCommercialWindowCleaning;
