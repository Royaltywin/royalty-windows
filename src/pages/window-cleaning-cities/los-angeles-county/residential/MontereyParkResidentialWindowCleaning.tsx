import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MontereyParkResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Monterey Park"
      citySlug="monterey-park"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["monterey-park"]}
    />
  );
};

export default MontereyParkResidentialWindowCleaning;
