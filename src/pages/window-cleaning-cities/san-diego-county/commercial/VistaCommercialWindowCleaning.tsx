import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VistaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Vista"
      citySlug="vista"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["vista"]}
    />
  );
};

export default VistaCommercialWindowCleaning;
