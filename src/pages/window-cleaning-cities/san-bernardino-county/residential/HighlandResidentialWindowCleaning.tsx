import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HighlandResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Highland"
      citySlug="highland"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["highland"]}
    />
  );
};

export default HighlandResidentialWindowCleaning;
