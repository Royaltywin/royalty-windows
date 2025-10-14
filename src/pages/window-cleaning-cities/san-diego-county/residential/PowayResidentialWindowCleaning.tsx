import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PowayResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Poway"
      citySlug="poway"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["poway"]}
    />
  );
};

export default PowayResidentialWindowCleaning;
