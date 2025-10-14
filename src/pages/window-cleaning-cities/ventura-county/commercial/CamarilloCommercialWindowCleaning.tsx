import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CamarilloCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Camarillo"
      citySlug="camarillo"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["camarillo"]}
    />
  );
};

export default CamarilloCommercialWindowCleaning;
