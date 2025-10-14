import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EscondidoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Escondido"
      citySlug="escondido"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["escondido"]}
    />
  );
};

export default EscondidoResidentialWindowCleaning;
