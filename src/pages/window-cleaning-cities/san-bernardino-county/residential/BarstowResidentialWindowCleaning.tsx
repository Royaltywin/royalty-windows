import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BarstowResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Barstow"
      citySlug="barstow"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["barstow"]}
    />
  );
};

export default BarstowResidentialWindowCleaning;
