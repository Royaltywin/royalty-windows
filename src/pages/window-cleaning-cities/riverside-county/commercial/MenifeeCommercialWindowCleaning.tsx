import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MenifeeCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Menifee"
      citySlug="menifee"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["menifee"]}
    />
  );
};

export default MenifeeCommercialWindowCleaning;
