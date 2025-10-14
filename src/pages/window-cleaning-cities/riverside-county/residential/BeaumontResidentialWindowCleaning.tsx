import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BeaumontResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Beaumont"
      citySlug="beaumont"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["beaumont"]}
    />
  );
};

export default BeaumontResidentialWindowCleaning;
