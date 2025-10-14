import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeElsinoreCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Lake Elsinore"
      citySlug="lake-elsinore"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["lake-elsinore"]}
    />
  );
};

export default LakeElsinoreCommercialWindowCleaning;
