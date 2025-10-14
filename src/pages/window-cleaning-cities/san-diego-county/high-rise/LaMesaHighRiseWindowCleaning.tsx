import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaMesaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="La Mesa"
      citySlug="la-mesa"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["la-mesa"]}
    />
  );
};

export default LaMesaHighRiseWindowCleaning;
