import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const JurupaValleyHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Jurupa Valley"
      citySlug="jurupa-valley"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["jurupa-valley"]}
    />
  );
};

export default JurupaValleyHighRiseWindowCleaning;
