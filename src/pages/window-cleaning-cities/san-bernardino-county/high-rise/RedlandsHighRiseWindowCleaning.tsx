import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RedlandsHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Redlands"
      citySlug="redlands"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["redlands"]}
    />
  );
};

export default RedlandsHighRiseWindowCleaning;
