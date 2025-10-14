import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OjaiResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Ojai"
      citySlug="ojai"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["ojai"]}
    />
  );
};

export default OjaiResidentialWindowCleaning;
