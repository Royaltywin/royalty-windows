import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElMonteCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="El Monte"
      citySlug="el-monte"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["el-monte"]}
    />
  );
};

export default ElMonteCommercialWindowCleaning;
