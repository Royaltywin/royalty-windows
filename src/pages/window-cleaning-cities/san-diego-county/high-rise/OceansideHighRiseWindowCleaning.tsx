import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OceansideHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Oceanside"
      citySlug="oceanside"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["oceanside"]}
    />
  );
};

export default OceansideHighRiseWindowCleaning;
