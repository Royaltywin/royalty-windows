import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanClementeResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="San Clemente"
      citySlug="san-clemente"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["san-clemente"]}
    />
  );
};

export default SanClementeResidentialWindowCleaning;
