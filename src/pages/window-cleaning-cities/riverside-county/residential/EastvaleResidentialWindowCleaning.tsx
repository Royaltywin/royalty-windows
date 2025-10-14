import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const EastvaleResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Eastvale"
      citySlug="eastvale"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["eastvale"]}
    />
  );
};

export default EastvaleResidentialWindowCleaning;
