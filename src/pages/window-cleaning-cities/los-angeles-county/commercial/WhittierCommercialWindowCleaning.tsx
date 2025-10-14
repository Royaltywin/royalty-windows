import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WhittierCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Whittier"
      citySlug="whittier"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["whittier"]}
    />
  );
};

export default WhittierCommercialWindowCleaning;
