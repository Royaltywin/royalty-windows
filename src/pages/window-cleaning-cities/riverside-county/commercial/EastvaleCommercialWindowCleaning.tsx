import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EastvaleCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Eastvale"
      citySlug="eastvale"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["eastvale"]}
    />
  );
};

export default EastvaleCommercialWindowCleaning;
