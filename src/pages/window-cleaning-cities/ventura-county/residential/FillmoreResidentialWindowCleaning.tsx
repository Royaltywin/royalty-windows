import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FillmoreResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Fillmore"
      citySlug="fillmore"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["fillmore"]}
    />
  );
};

export default FillmoreResidentialWindowCleaning;
