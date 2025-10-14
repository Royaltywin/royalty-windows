import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PortHuenemeCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Port Hueneme"
      citySlug="port-hueneme"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["port-hueneme"]}
    />
  );
};

export default PortHuenemeCommercialWindowCleaning;
