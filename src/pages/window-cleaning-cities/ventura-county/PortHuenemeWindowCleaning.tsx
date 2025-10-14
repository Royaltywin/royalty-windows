import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PortHuenemeWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Port Hueneme"
      citySlug="port-hueneme"
      countyName="Ventura County"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["port-hueneme"]}
    />
  );
};

export default PortHuenemeWindowCleaning;
