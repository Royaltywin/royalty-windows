import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanteeResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Santee"
      citySlug="santee"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["santee"]}
    />
  );
};

export default SanteeResidentialWindowCleaning;
