import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BanningHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Banning"
      citySlug="banning"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["banning"]}
    />
  );
};

export default BanningHighRiseWindowCleaning;
