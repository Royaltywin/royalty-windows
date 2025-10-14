import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RedlandsResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Redlands"
      citySlug="redlands"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["redlands"]}
    />
  );
};

export default RedlandsResidentialWindowCleaning;
