import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OxnardHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Oxnard"
      citySlug="oxnard"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["oxnard"]}
    />
  );
};

export default OxnardHighRiseWindowCleaning;
