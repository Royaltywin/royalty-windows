import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronadoResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Coronado"
      citySlug="coronado"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["coronado"]}
    />
  );
};

export default CoronadoResidentialWindowCleaning;
