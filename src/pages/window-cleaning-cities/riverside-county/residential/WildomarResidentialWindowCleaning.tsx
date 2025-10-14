import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WildomarResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Wildomar"
      citySlug="wildomar"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["wildomar"]}
    />
  );
};

export default WildomarResidentialWindowCleaning;
