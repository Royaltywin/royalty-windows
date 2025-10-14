import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CostaMesaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Costa Mesa"
      citySlug="costa-mesa"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["costa-mesa"]}
    />
  );
};

export default CostaMesaResidentialWindowCleaning;
