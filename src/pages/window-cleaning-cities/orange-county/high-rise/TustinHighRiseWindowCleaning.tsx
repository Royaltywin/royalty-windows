import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TustinHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Tustin"
      citySlug="tustin"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["tustin"]}
    />
  );
};

export default TustinHighRiseWindowCleaning;
