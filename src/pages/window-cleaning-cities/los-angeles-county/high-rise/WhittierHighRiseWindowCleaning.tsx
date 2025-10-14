import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WhittierHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Whittier"
      citySlug="whittier"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["whittier"]}
    />
  );
};

export default WhittierHighRiseWindowCleaning;
