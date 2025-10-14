import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeForestCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Lake Forest"
      citySlug="lake-forest"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["lake-forest"]}
    />
  );
};

export default LakeForestCommercialWindowCleaning;
