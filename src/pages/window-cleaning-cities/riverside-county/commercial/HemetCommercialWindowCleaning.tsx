import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HemetCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Hemet"
      citySlug="hemet"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["hemet"]}
    />
  );
};

export default HemetCommercialWindowCleaning;
