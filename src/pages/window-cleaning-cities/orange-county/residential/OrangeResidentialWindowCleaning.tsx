import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OrangeResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Orange"
      citySlug="orange"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["orange"]}
    />
  );
};

export default OrangeResidentialWindowCleaning;
