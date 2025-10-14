import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const InglewoodResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Inglewood"
      citySlug="inglewood"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["inglewood"]}
    />
  );
};

export default InglewoodResidentialWindowCleaning;
