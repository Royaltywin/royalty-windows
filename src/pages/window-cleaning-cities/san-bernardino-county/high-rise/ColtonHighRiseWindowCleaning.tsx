import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ColtonHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Colton"
      citySlug="colton"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["colton"]}
    />
  );
};

export default ColtonHighRiseWindowCleaning;
