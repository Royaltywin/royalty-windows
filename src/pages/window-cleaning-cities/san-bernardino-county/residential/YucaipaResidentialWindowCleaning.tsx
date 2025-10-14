import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YucaipaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Yucaipa"
      citySlug="yucaipa"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["yucaipa"]}
    />
  );
};

export default YucaipaResidentialWindowCleaning;
