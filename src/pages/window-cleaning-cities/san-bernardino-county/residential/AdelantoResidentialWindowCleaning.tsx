import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AdelantoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Adelanto"
      citySlug="adelanto"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["adelanto"]}
    />
  );
};

export default AdelantoResidentialWindowCleaning;
