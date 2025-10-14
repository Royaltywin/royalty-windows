import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanBernardinoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="San Bernardino"
      citySlug="san-bernardino"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["san-bernardino"]}
    />
  );
};

export default SanBernardinoResidentialWindowCleaning;
