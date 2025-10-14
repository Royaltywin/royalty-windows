import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanMarcosHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="San Marcos"
      citySlug="san-marcos"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["san-marcos"]}
    />
  );
};

export default SanMarcosHighRiseWindowCleaning;
