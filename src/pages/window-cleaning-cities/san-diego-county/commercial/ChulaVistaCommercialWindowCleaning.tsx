import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChulaVistaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Chula Vista"
      citySlug="chula-vista"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["chula-vista"]}
    />
  );
};

export default ChulaVistaCommercialWindowCleaning;
