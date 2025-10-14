import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EncinitasResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Encinitas"
      citySlug="encinitas"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["encinitas"]}
    />
  );
};

export default EncinitasResidentialWindowCleaning;
