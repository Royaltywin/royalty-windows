import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanBernardinoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="San Bernardino"
      citySlug="san-bernardino"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["san-bernardino"]}
    />
  );
};

export default SanBernardinoCommercialWindowCleaning;
