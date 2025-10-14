import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElMonteResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="El Monte"
      citySlug="el-monte"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["el-monte"]}
    />
  );
};

export default ElMonteResidentialWindowCleaning;
