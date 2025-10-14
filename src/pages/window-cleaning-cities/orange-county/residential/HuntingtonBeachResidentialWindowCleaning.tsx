import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HuntingtonBeachResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Huntington Beach"
      citySlug="huntington-beach"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["huntington-beach"]}
    />
  );
};

export default HuntingtonBeachResidentialWindowCleaning;
