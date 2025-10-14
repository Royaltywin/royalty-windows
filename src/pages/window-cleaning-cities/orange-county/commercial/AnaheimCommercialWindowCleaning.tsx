import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AnaheimCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Anaheim"
      citySlug="anaheim"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["anaheim"]}
    />
  );
};

export default AnaheimCommercialWindowCleaning;
