import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RamonaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Ramona"
      citySlug="ramona"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["ramona"]}
    />
  );
};

export default RamonaCommercialWindowCleaning;
