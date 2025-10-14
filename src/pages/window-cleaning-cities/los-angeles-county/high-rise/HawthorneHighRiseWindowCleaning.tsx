import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HawthorneHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Hawthorne"
      citySlug="hawthorne"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["hawthorne"]}
    />
  );
};

export default HawthorneHighRiseWindowCleaning;
