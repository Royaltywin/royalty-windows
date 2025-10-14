import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ArcadiaHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Arcadia"
      citySlug="arcadia"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["arcadia"]}
    />
  );
};

export default ArcadiaHighRiseWindowCleaning;
