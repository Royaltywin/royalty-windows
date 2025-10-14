import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MurrietaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Murrieta"
      citySlug="murrieta"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["murrieta"]}
    />
  );
};

export default MurrietaCommercialWindowCleaning;
