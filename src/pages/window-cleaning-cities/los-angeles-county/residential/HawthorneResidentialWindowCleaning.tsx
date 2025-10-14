import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HawthorneResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Hawthorne"
      citySlug="hawthorne"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["hawthorne"]}
    />
  );
};

export default HawthorneResidentialWindowCleaning;
