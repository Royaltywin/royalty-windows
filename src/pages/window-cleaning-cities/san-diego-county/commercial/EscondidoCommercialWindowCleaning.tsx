import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EscondidoCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Escondido"
      citySlug="escondido"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["escondido"]}
    />
  );
};

export default EscondidoCommercialWindowCleaning;
