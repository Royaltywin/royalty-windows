import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LemonGroveResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Lemon Grove"
      citySlug="lemon-grove"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["lemon-grove"]}
    />
  );
};

export default LemonGroveResidentialWindowCleaning;
