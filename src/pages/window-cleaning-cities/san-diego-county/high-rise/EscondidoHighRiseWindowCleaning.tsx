import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EscondidoHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Escondido"
      citySlug="escondido"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["escondido"]}
    />
  );
};

export default EscondidoHighRiseWindowCleaning;
