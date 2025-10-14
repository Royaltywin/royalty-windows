import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FallbrookResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Fallbrook"
      citySlug="fallbrook"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["fallbrook"]}
    />
  );
};

export default FallbrookResidentialWindowCleaning;
