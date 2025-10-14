import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AlhambraResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Alhambra"
      citySlug="alhambra"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["alhambra"]}
    />
  );
};

export default AlhambraResidentialWindowCleaning;
