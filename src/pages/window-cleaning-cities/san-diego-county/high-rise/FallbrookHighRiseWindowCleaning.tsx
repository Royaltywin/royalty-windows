import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FallbrookHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Fallbrook"
      citySlug="fallbrook"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["fallbrook"]}
    />
  );
};

export default FallbrookHighRiseWindowCleaning;
