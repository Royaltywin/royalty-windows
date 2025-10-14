import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ThousandOaksResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Thousand Oaks"
      citySlug="thousand-oaks"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["thousand-oaks"]}
    />
  );
};

export default ThousandOaksResidentialWindowCleaning;
