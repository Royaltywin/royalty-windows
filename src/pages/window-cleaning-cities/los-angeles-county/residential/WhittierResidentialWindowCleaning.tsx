import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WhittierResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Whittier"
      citySlug="whittier"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["whittier"]}
    />
  );
};

export default WhittierResidentialWindowCleaning;
