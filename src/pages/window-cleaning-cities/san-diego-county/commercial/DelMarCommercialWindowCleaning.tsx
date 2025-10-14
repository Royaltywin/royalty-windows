import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DelMarCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Del Mar"
      citySlug="del-mar"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["del-mar"]}
    />
  );
};

export default DelMarCommercialWindowCleaning;
