import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AnaheimResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Anaheim"
      citySlug="anaheim"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["anaheim"]}
    />
  );
};

export default AnaheimResidentialWindowCleaning;
