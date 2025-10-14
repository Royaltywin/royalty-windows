import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const TustinResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Tustin"
      citySlug="tustin"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["tustin"]}
    />
  );
};

export default TustinResidentialWindowCleaning;
