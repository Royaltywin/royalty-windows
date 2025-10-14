import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ChinoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Chino"
      citySlug="chino"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["chino"]}
    />
  );
};

export default ChinoResidentialWindowCleaning;
