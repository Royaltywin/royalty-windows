import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NewportBeachHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Newport Beach"
      citySlug="newport-beach"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["newport-beach"]}
    />
  );
};

export default NewportBeachHighRiseWindowCleaning;
