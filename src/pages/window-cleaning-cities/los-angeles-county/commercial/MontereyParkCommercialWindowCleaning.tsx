import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontereyParkCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Monterey Park"
      citySlug="monterey-park"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["monterey-park"]}
    />
  );
};

export default MontereyParkCommercialWindowCleaning;
