import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GlendaleHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Glendale"
      citySlug="glendale"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["glendale"]}
    />
  );
};

export default GlendaleHighRiseWindowCleaning;
