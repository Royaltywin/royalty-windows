import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PasadenaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Pasadena"
      citySlug="pasadena"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pasadena"]}
    />
  );
};

export default PasadenaHighRiseWindowCleaning;
