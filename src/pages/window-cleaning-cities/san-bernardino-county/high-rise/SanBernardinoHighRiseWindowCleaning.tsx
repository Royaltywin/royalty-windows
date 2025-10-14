import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanBernardinoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="San Bernardino"
      citySlug="san-bernardino"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["san-bernardino"]}
    />
  );
};

export default SanBernardinoHighRiseWindowCleaning;
