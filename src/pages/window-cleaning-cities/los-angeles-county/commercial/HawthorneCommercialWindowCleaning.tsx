import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HawthorneCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Hawthorne"
      citySlug="hawthorne"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["hawthorne"]}
    />
  );
};

export default HawthorneCommercialWindowCleaning;
