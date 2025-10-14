import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LomaLindaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Loma Linda"
      citySlug="loma-linda"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["loma-linda"]}
    />
  );
};

export default LomaLindaResidentialWindowCleaning;
