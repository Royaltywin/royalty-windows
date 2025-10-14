import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MorenoValleyResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Moreno Valley"
      citySlug="moreno-valley"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["moreno-valley"]}
    />
  );
};

export default MorenoValleyResidentialWindowCleaning;
