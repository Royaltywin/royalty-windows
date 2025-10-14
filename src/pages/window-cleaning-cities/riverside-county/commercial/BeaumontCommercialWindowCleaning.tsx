import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BeaumontCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Beaumont"
      citySlug="beaumont"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["beaumont"]}
    />
  );
};

export default BeaumontCommercialWindowCleaning;
