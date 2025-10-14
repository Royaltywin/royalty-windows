import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PowayHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Poway"
      citySlug="poway"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["poway"]}
    />
  );
};

export default PowayHighRiseWindowCleaning;
