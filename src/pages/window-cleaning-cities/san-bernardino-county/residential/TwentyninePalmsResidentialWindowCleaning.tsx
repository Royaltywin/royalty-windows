import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TwentyninePalmsResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Twentynine Palms"
      citySlug="twentynine-palms"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["twentynine-palms"]}
    />
  );
};

export default TwentyninePalmsResidentialWindowCleaning;
