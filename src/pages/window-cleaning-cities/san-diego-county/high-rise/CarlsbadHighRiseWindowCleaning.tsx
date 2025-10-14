import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CarlsbadHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Carlsbad"
      citySlug="carlsbad"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["carlsbad"]}
    />
  );
};

export default CarlsbadHighRiseWindowCleaning;
