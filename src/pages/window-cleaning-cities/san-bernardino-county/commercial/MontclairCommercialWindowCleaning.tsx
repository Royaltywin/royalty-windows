import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontclairCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Montclair"
      citySlug="montclair"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["montclair"]}
    />
  );
};

export default MontclairCommercialWindowCleaning;
