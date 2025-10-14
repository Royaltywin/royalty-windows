import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FullertonHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Fullerton"
      citySlug="fullerton"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fullerton"]}
    />
  );
};

export default FullertonHighRiseWindowCleaning;
