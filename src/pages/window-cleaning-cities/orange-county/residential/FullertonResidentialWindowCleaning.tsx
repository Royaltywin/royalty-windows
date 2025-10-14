import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FullertonResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Fullerton"
      citySlug="fullerton"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fullerton"]}
    />
  );
};

export default FullertonResidentialWindowCleaning;
