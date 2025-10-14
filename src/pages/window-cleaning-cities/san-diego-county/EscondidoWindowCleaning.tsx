import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EscondidoWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Escondido"
      citySlug="escondido"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["escondido"]}
    />
  );
};

export default EscondidoWindowCleaning;
