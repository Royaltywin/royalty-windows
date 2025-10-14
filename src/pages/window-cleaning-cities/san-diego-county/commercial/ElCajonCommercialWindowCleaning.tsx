import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElCajonCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="El Cajon"
      citySlug="el-cajon"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["el-cajon"]}
    />
  );
};

export default ElCajonCommercialWindowCleaning;
