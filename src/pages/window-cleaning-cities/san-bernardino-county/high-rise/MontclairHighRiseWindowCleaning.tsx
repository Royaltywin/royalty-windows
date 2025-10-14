import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontclairHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Montclair"
      citySlug="montclair"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["montclair"]}
    />
  );
};

export default MontclairHighRiseWindowCleaning;
