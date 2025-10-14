import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PortHuenemeResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Port Hueneme"
      citySlug="port-hueneme"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["port-hueneme"]}
    />
  );
};

export default PortHuenemeResidentialWindowCleaning;
