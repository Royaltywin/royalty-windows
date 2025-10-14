import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FountainValleyResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Fountain Valley"
      citySlug="fountain-valley"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fountain-valley"]}
    />
  );
};

export default FountainValleyResidentialWindowCleaning;
