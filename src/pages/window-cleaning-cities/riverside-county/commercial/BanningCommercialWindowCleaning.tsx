import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BanningCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Banning"
      citySlug="banning"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["banning"]}
    />
  );
};

export default BanningCommercialWindowCleaning;
