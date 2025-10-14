import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const ColtonResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Colton"
      citySlug="colton"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["colton"]}
    />
  );
};

export default ColtonResidentialWindowCleaning;
