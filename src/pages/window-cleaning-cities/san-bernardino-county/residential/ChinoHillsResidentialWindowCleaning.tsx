import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoHillsResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Chino Hills"
      citySlug="chino-hills"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino-hills"]}
    />
  );
};

export default ChinoHillsResidentialWindowCleaning;
