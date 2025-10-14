import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronadoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Coronado"
      citySlug="coronado"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["coronado"]}
    />
  );
};

export default CoronadoCommercialWindowCleaning;
