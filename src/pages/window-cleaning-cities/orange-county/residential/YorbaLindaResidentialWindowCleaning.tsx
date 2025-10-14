import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YorbaLindaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Yorba Linda"
      citySlug="yorba-linda"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["yorba-linda"]}
    />
  );
};

export default YorbaLindaResidentialWindowCleaning;
