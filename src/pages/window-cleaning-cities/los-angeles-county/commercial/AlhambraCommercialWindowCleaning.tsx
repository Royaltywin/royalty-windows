import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlhambraCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Alhambra"
      citySlug="alhambra"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["alhambra"]}
    />
  );
};

export default AlhambraCommercialWindowCleaning;
