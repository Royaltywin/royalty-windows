import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorcoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Norco"
      citySlug="norco"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["norco"]}
    />
  );
};

export default NorcoCommercialWindowCleaning;
