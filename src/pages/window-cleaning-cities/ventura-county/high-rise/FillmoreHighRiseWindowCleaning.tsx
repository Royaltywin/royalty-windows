import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FillmoreHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Fillmore"
      citySlug="fillmore"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["fillmore"]}
    />
  );
};

export default FillmoreHighRiseWindowCleaning;
