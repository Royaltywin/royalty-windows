import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DelMarResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Del Mar"
      citySlug="del-mar"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["del-mar"]}
    />
  );
};

export default DelMarResidentialWindowCleaning;
