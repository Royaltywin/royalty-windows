import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PortHuenemeHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Port Hueneme"
      citySlug="port-hueneme"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["port-hueneme"]}
    />
  );
};

export default PortHuenemeHighRiseWindowCleaning;
