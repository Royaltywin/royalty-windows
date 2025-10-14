import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PomonaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Pomona"
      citySlug="pomona"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pomona"]}
    />
  );
};

export default PomonaResidentialWindowCleaning;
