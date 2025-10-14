import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanDiegoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="San Diego"
      citySlug="san-diego"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-diego"]}
    />
  );
};

export default SanDiegoResidentialWindowCleaning;
