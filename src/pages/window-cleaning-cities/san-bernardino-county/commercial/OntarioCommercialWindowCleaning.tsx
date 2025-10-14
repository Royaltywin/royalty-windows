import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OntarioCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Ontario"
      citySlug="ontario"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["ontario"]}
    />
  );
};

export default OntarioCommercialWindowCleaning;
