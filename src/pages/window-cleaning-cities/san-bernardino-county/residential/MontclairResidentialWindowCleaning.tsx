import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontclairResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Montclair"
      citySlug="montclair"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["montclair"]}
    />
  );
};

export default MontclairResidentialWindowCleaning;
