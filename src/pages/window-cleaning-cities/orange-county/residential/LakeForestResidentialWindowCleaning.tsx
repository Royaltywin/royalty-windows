import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeForestResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Lake Forest"
      citySlug="lake-forest"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["lake-forest"]}
    />
  );
};

export default LakeForestResidentialWindowCleaning;
