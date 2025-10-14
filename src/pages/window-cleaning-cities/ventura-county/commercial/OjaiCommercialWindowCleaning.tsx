import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OjaiCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Ojai"
      citySlug="ojai"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ojai"]}
    />
  );
};

export default OjaiCommercialWindowCleaning;
