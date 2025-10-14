import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanMarcosResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="San Marcos"
      citySlug="san-marcos"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-marcos"]}
    />
  );
};

export default SanMarcosResidentialWindowCleaning;
