import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PowayCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Poway"
      citySlug="poway"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["poway"]}
    />
  );
};

export default PowayCommercialWindowCleaning;
