import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IrvineCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Irvine"
      citySlug="irvine"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["irvine"]}
    />
  );
};

export default IrvineCommercialWindowCleaning;
