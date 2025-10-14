import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HemetHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Hemet"
      citySlug="hemet"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["hemet"]}
    />
  );
};

export default HemetHighRiseWindowCleaning;
