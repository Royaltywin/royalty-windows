import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const DowneyResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Downey"
      citySlug="downey"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["downey"]}
    />
  );
};

export default DowneyResidentialWindowCleaning;
