import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SimiValleyResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Simi Valley"
      citySlug="simi-valley"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["simi-valley"]}
    />
  );
};

export default SimiValleyResidentialWindowCleaning;
