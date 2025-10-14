import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IndioHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Indio"
      citySlug="indio"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["indio"]}
    />
  );
};

export default IndioHighRiseWindowCleaning;
