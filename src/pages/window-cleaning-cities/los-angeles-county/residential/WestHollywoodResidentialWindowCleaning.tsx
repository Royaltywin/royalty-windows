import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const WestHollywoodResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="West Hollywood"
      citySlug="west-hollywood"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["west-hollywood"]}
    />
  );
};

export default WestHollywoodResidentialWindowCleaning;
