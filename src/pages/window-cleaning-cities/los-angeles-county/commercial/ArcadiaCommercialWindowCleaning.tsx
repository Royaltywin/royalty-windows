import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ArcadiaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Arcadia"
      citySlug="arcadia"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["arcadia"]}
    />
  );
};

export default ArcadiaCommercialWindowCleaning;
