import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ImperialBeachResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Imperial Beach"
      citySlug="imperial-beach"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["imperial-beach"]}
    />
  );
};

export default ImperialBeachResidentialWindowCleaning;
