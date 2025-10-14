import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeElsinoreResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Lake Elsinore"
      citySlug="lake-elsinore"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["lake-elsinore"]}
    />
  );
};

export default LakeElsinoreResidentialWindowCleaning;
