import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ElCajonResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="El Cajon"
      citySlug="el-cajon"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["el-cajon"]}
    />
  );
};

export default ElCajonResidentialWindowCleaning;
