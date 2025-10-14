import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const JurupaValleyCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Jurupa Valley"
      citySlug="jurupa-valley"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["jurupa-valley"]}
    />
  );
};

export default JurupaValleyCommercialWindowCleaning;
